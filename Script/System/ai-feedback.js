class PDFProcessor {
    constructor(workerSrc) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
    }

    async extractTextFromPDF(filePath) {
        const response = await fetch(filePath);
        const pdfData = await response.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(pdfData) }).promise;
        let text = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            try {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                text += content.items.map(item => item.str).join(" ") + "\n";
            } catch (e) {
                console.error(`Error extracting text from page ${i}:`, e);
            }
        }
        return text;
    }
}

class ChatUI {
    constructor(modalId, modalBodyClass, modalTitleId) {
        this.modal = document.getElementById(modalId);
        this.modalBody = document.querySelector(`.${modalBodyClass}`);
        this.modalTitle = document.getElementById(modalTitleId);
        this.closeButton = document.querySelector(".close i");
        this.loaderContainer = this.createLoaderContainer(); // Create loader container with text
        this.initCloseEvent();
    }

    initCloseEvent() {
        if (this.closeButton) {
            this.closeButton.addEventListener("click", () => this.hideModal());
        }
    }

    showModal(title) {
        this.modalTitle.textContent = title;
        this.modal.style.display = "flex";
    }

    hideModal() {
        this.modal.style.display = "none";
        this.clearMessages();
    }

    clearMessages() {
        this.modalBody.innerHTML = "";
    }

    // Create a loader container with a spinner and text
    createLoaderContainer() {
        const container = document.createElement("div");
        container.classList.add("loader-container");

        // Create the loader element
        const loader = document.createElement("span");
        loader.classList.add("loader");
        container.appendChild(loader);

        // Create the text element
        const text = document.createElement("p");
        text.textContent = "Please wait a few seconds while we process your request...";
        text.classList.add("loader-text");
        container.appendChild(text);

        return container;
    }

    showLoader() {
        this.modalBody.appendChild(this.loaderContainer); // Add loader container to modal body
        this.loaderContainer.style.display = "flex"; // Show loader container
    }

    hideLoader() {
        this.loaderContainer.style.display = "none"; // Hide loader container
    }

    addMessage(text, sender = "bot") {
        const messageBox = document.createElement("div");
        messageBox.classList.add(`${sender}-messages-box`);

        if (sender === "bot") {
            const imageBox = document.createElement("div");
            imageBox.classList.add("image-box");
            messageBox.appendChild(imageBox);

            const image = document.createElement("img");
            image.src = "Image/chat-bot.jpg";
            image.alt = "ChatBot";
            imageBox.appendChild(image);
        }

        const messageContent = document.createElement("p");
        const formattedText = this.formatMessage(text);
        messageContent.innerHTML = formattedText;

        messageBox.appendChild(messageContent);
        this.modalBody.appendChild(messageBox);
        this.modalBody.scrollTop = this.modalBody.scrollHeight;
    }

    formatMessage(text) {
        text = text.replace(/\n/g, "<br>");
        text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        text = text.replace(/__(.*?)__/g, "<u>$1</u>");
        text = text.replace(/```(.*?)```/gs, "<pre><code>$1</code></pre>");
        return text;
    }
}

class OllamaStreamer {
    constructor(apiUrl, chatUI) {
        this.apiUrl = apiUrl;
        this.chatUI = chatUI;
        this.isRequestInProgress = false;
    }

    async streamOllama(prompt, isSpecialUser) {
        if (this.isRequestInProgress) {
            alert("Please wait for the current request to complete.");
            return;
        }

        this.isRequestInProgress = true;
        this.chatUI.showLoader(); // Show loader with text

        try {
            const processedPrompt = isSpecialUser
                ? `Provide the solution to the task along with a description and recommendations for solving it: ${prompt}`
                : `Provide general recommendations for solving this task without displaying any code in any way: ${prompt}`;

            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ model: "phi3", prompt: processedPrompt, stream: true })
            });

            if (!response.ok) throw new Error(`Error: ${response.statusText}`);

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let accumulatedText = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const text = decoder.decode(value, { stream: true }).trim();

                try {
                    const jsonLines = text.split("\n").filter(line => line.trim() !== "");
                    for (const line of jsonLines) {
                        const parsed = JSON.parse(line);
                        if (parsed.response) {
                            accumulatedText += parsed.response + " ";
                            this.chatUI.hideLoader(); // Hide loader when response starts
                            this.chatUI.clearMessages();
                            this.chatUI.addMessage(accumulatedText.trim(), "bot");
                        }
                    }
                } catch (e) {
                    console.error("Error parsing JSON:", e);
                }
            }

            const cacheKey = generateCacheKey(prompt);
            localStorage.setItem(cacheKey, accumulatedText.trim());
        } catch (e) {
            console.error("Error streaming Ollama:", e);
            this.chatUI.hideLoader(); // Hide loader on error
            this.chatUI.addMessage("An error occurred while processing your request. Please try again later.", "bot");
            decrementRequestCount();
        } finally {
            this.isRequestInProgress = false;
            this.chatUI.hideLoader(); // Hide loader when done
        }
    }
}

function generateCacheKey(text) {
    const hashKey = text.substring(0, 100).replace(/\s+/g, '_');
    return `response_${hashKey}`;
}

function getDailyRequestCount() {
    const today = new Date().toISOString().split('T')[0];
    const countData = JSON.parse(localStorage.getItem("requestCountData") || '{"date":"","count":0}');

    if (countData.date !== today) {
        return { date: today, count: 0 };
    }

    return countData;
}

function incrementRequestCount() {
    const countData = getDailyRequestCount();
    countData.count += 1;
    localStorage.setItem("requestCountData", JSON.stringify(countData));
    return countData.count;
}

function decrementRequestCount() {
    const countData = getDailyRequestCount();
    countData.count -= 1;
    localStorage.setItem("requestCountData", JSON.stringify(countData));
    return countData.count;
}

class PDFHandler {
    constructor(pdfProcessor, ollamaStreamer) {
        this.pdfProcessor = pdfProcessor;
        this.ollamaStreamer = ollamaStreamer;
    }

    async handleTask() {
        const activeTask = document.querySelector(".task-card.active-task");
        if (!activeTask) {
            alert("Please select a task first.");
            return;
        }

        const taskText = activeTask.textContent.trim();
        let directory = ReturnTaskDocument(taskText).directory;
        let fileName = ReturnTaskDocument(taskText).fileName;

        const filePath = `${directory}/${fileName}`;
        const text = await this.pdfProcessor.extractTextFromPDF(filePath);

        chatUI.showModal(taskText);
        chatUI.showLoader(); // Show loader with text

        const cacheKey = generateCacheKey(text);
        const savedResponse = localStorage.getItem(cacheKey);
        if (savedResponse) {
            chatUI.hideLoader(); // Hide loader if cached response exists
            chatUI.addMessage(savedResponse, "bot");
            return;
        }

        const countData = getDailyRequestCount();
        if (countData.count >= 3 && !getSpecialUser()) {
            chatUI.hideLoader(); // Hide loader if daily limit is reached
            chatUI.addMessage("You have reached the daily limit of 3 requests. Please try again tomorrow.", "bot");
            return;
        }

        incrementRequestCount();
        const isSpecialUser = getSpecialUser();
        this.ollamaStreamer.streamOllama(text, isSpecialUser);
    }
}

// Initialize components
const chatUI = new ChatUI("ai-modal", "messages-area", "modal-title");
const pdfProcessor = new PDFProcessor("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js");
const ollamaStreamer = new OllamaStreamer("http://178.254.231.16:11434/api/generate", chatUI);
const pdfHandler = new PDFHandler(pdfProcessor, ollamaStreamer);

// Add event listener
document.querySelector(".ai-button").addEventListener("click", () => pdfHandler.handleTask());

// Initialize the request count on page load
(function initializeRequestCount() {
    const countData = getDailyRequestCount();
    localStorage.setItem("requestCountData", JSON.stringify(countData));
})();