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
        // Format the text: handle new lines, bold, underline, and code blocks
        const formattedText = this.formatMessage(text);
        messageContent.innerHTML = formattedText;

        messageBox.appendChild(messageContent);
        this.modalBody.appendChild(messageBox);
        this.modalBody.scrollTop = this.modalBody.scrollHeight;
    }

    formatMessage(text) {
        // Replace new lines with <br>
        text = text.replace(/\n/g, "<br>");

        // Format bold text: **bold** -> <strong>bold</strong>
        text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        // Format underlined text: __underline__ -> <u>underline</u>
        text = text.replace(/__(.*?)__/g, "<u>$1</u>");

        // Format code blocks: ```code``` -> <pre><code>code</code></pre>
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
                            this.chatUI.clearMessages();
                            this.chatUI.addMessage(accumulatedText.trim(), "bot");
                        }
                    }
                } catch (e) {
                    console.error("Error parsing JSON:", e);
                }
            }

            // Save the response to localStorage with a consistent key
            const cacheKey = generateCacheKey(prompt);
            localStorage.setItem(cacheKey, accumulatedText.trim());
        } catch (e) {
            console.error("Error streaming Ollama:", e);
            this.chatUI.addMessage("An error occurred while processing your request. Please try again later.", "bot");
            decrementRequestCount();
        } finally {
            this.isRequestInProgress = false;
        }
    }
}

// Helper function for generating cache keys
function generateCacheKey(text) {
    // Create a hash from the first 100 characters to use as a key
    const hashKey = text.substring(0, 100).replace(/\s+/g, '_');
    return `response_${hashKey}`;
}

// Function to get daily request count
function getDailyRequestCount() {
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const countData = JSON.parse(localStorage.getItem("requestCountData") || '{"date":"","count":0}');

    // Reset count if it's a new day
    if (countData.date !== today) {
        return { date: today, count: 0 };
    }

    return countData;
}

// Function to increment request count
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
        console.log("Text extracted from PDF:", text);

        chatUI.showModal(taskText);

        // Generate a consistent cache key for this content
        const cacheKey = generateCacheKey(text);

        // Check if the response is already in localStorage
        const savedResponse = localStorage.getItem(cacheKey);
        if (savedResponse) {
            chatUI.addMessage(savedResponse, "bot");
            return;
        }

        // Check daily request limit
        const countData = getDailyRequestCount();
        if (countData.count >= 3 && !getSpecialUser()) {
            chatUI.addMessage("You have reached the daily limit of 3 requests. Please try again tomorrow.", "bot");
            return;
        }

        // Increment request count
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
    // Make sure we have today's date in the count data
    const countData = getDailyRequestCount();
    localStorage.setItem("requestCountData", JSON.stringify(countData));
})();




