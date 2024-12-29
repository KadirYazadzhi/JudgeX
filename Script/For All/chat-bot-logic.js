class MessageApp {
    constructor(messageAreaSelector, inputSelector, buttonSelector, responsesUrl, dot) {
        this.messageArea = document.querySelector(messageAreaSelector);
        this.messageText = document.querySelector(inputSelector);
        this.sendButton = document.querySelector(buttonSelector);
        this.responsesUrl = responsesUrl;
        this.dot = document.querySelector(dot);
        this.responses = {};
        this.isBotTyping = false;

        this.loadResponses();
        this.initializeEventListeners();
    }

    async loadResponses() {
        try {
            const response = await fetch(this.responsesUrl);
            this.responses = await response.json();
        } catch (error) {
            console.error("Error loading responses:", error);
        }
    }

    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageText.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    sendMessage() {
        if (this.isBotTyping) return;

        const message = this.messageText.value.trim();
        if (message) {
            this.createMessageBox(message, 'user');
            this.messageText.value = '';
            this.generateBotReply(message);
        }
    }

    createMessageBox(message, type, isTyping = false) {
        const messageBox = document.createElement('div');
        messageBox.classList.add(`${type}-messages-box`);

        if (type === "bot") {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');
            messageBox.appendChild(imageBox);

            const image = document.createElement('img');
            image.src = 'Image/chat-bot.jpg';
            image.alt = 'ChatBot';
            imageBox.appendChild(image);
        }

        const messageContent = document.createElement('p');
        if (isTyping) {
            messageContent.textContent = '';
        } else {
            messageContent.textContent = message;
        }

        messageBox.appendChild(messageContent);
        this.messageArea.appendChild(messageBox);
        this.messageArea.scrollTop = this.messageArea.scrollHeight;

        return messageContent;
    }

    generateBotReply(userMessage) {
        this.isBotTyping = true;
        this.toggleUserInput(false);

        const reply = this.analyzeMessage(userMessage);
        const botMessageContent = this.createMessageBox('', 'bot', true);

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < reply.length) {
                botMessageContent.textContent += reply[currentIndex];
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                this.isBotTyping = false;
                this.toggleUserInput(true);

                // If the bot doesn't understand, generate categories
                if (reply === "I'm sorry, I didn't understand that. Could you please clarify?") {
                    this.isBotTyping = true; // Bot starts typing again
                    this.toggleUserInput(false);

                    // Generate second message with animation
                    const secondMessage = "Or choose one of the following categories to find answers to your questions.";
                    const secondBotMessageContent = this.createMessageBox('', 'bot', true);

                    let secondIndex = 0;
                    const secondTypingInterval = setInterval(() => {
                        if (secondIndex < secondMessage.length) {
                            secondBotMessageContent.textContent += secondMessage[secondIndex];
                            secondIndex++;
                        } else {
                            clearInterval(secondTypingInterval);
                            this.isBotTyping = false; // Bot finished typing
                            this.toggleUserInput(true); // Re-enable user input
                            this.generateCategories(); // Show categories after the second message
                        }
                    }, 100); // Simulated typing speed for the second message
                }
            }
        }, 100);
    }

    toggleUserInput(isEnabled) {
        this.sendButton.disabled = !isEnabled;
        this.messageText.disabled = !isEnabled;
        this.sendButton.style.cursor = isEnabled ? 'pointer' : 'not-allowed';
        this.dot.classList.remove('green-chat-dot', 'orange-chat-dot');
        this.dot.classList.add(isEnabled ? 'green-chat-dot' : 'orange-chat-dot');
    }

    analyzeMessage(message) {
        const lowerCaseMessage = message.toLowerCase();

        let bestMatchReplies = [];
        let matchedKeywords = [];

        for (let keyword in this.responses) {
            if (
                lowerCaseMessage === keyword.toLowerCase() ||
                lowerCaseMessage.includes(keyword.toLowerCase())
            ) {
                matchedKeywords.push(keyword);
                bestMatchReplies = this.responses[keyword];
            }
        }

        if (matchedKeywords.length > 0) {
            return bestMatchReplies[Math.floor(Math.random() * bestMatchReplies.length)];
        }

        return "I'm sorry, I didn't understand that. Could you please clarify?";
    }

    generateCategories() {
        const categories = [
            "General Questions",
            "Technical Support",
            "Billing Issues",
            "Account Management"
        ];

        const container = document.createElement('div');
        container.classList.add('categories-container');
        this.messageArea.appendChild(container);

        let currentIndex = 0;

        const categoryTypingInterval = setInterval(() => {
            if (currentIndex < categories.length) {
                const button = document.createElement('div');
                button.classList.add('category-button');
                container.appendChild(button);

                const text = document.createElement('spm');
                text.textContent = categories[currentIndex];
                button.appendChild(text);

                currentIndex++;
            } else {
                clearInterval(categoryTypingInterval);
            }
        }, 500); // Delay between each category animation
    }

}

const app = new MessageApp('.messages-area', '.send-input', '.send-icon', 'Json/chat-bot-phrases.json', '.chat-circle');
