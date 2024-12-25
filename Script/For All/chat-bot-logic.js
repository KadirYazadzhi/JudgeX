class MessageApp {
    constructor(messageAreaSelector, inputSelector, buttonSelector, responsesUrl, dot) {
        this.messageArea = document.querySelector(messageAreaSelector);
        this.messageText = document.querySelector(inputSelector);
        this.sendButton = document.querySelector(buttonSelector);
        this.responsesUrl = responsesUrl;
        this.dot = document.querySelector(dot);
        this.responses = {};
        this.isBotTyping = false; // Tracks if the bot is currently typing

        this.loadResponses();
        this.initializeEventListeners();
    }

    // Loads responses from a JSON file
    async loadResponses() {
        try {
            const response = await fetch(this.responsesUrl);
            this.responses = await response.json();
        } catch (error) {
            console.error("Error loading responses:", error);
        }
    }

    // Initializes event listeners for input and button
    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageText.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    // Handles sending a user message
    sendMessage() {
        if (this.isBotTyping) return; // Prevents sending a message while the bot is typing

        const message = this.messageText.value.trim();
        if (message) {
            this.createMessageBox(message, 'user');
            this.messageText.value = '';
            this.generateBotReply(message);
        }
    }

    // Creates a message box for either the user or bot
    createMessageBox(message, type, isTyping = false) {
        const messageBox = document.createElement('div');
        messageBox.classList.add(`${type}-messages-box`);

        const messageContent = document.createElement('p');
        if (isTyping) {
            messageContent.textContent = ''; // Placeholder for typing animation
        } else {
            messageContent.textContent = message;
        }

        messageBox.appendChild(messageContent);
        this.messageArea.appendChild(messageBox);
        this.messageArea.scrollTop = this.messageArea.scrollHeight;

        return messageContent;
    }

    // Simulates the bot typing a reply
    generateBotReply(userMessage) {
        this.isBotTyping = true; // Bot starts typing
        this.toggleUserInput(false); // Disable user input

        const reply = this.analyzeMessage(userMessage);
        const botMessageContent = this.createMessageBox('', 'bot', true);

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < reply.length) {
                botMessageContent.textContent += reply[currentIndex];
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                this.isBotTyping = false; // Bot finished typing
                this.toggleUserInput(true); // Re-enable user input
            }
        }, 100); // Simulated typing speed
    }

    // Enables or disables user input based on bot's typing status
    toggleUserInput(isEnabled) {
        this.sendButton.disabled = !isEnabled;
        this.messageText.disabled = !isEnabled;
        this.sendButton.style.cursor = isEnabled ? 'pointer' : 'not-allowed';
        this.dot.classList.remove('green-chat-dot', 'orange-chat-dot');
        this.dot.classList.add(isEnabled ? 'green-chat-dot' : 'orange-chat-dot');
    }

    // Analyzes the user message and finds the best match
    analyzeMessage(message) {
        const lowerCaseMessage = message.toLowerCase();

        let bestMatchReplies = [];
        let matchedKeywords = [];

        for (let keyword in this.responses) {
            if (
                lowerCaseMessage === keyword.toLowerCase() || // Exact match
                lowerCaseMessage.includes(keyword.toLowerCase()) // Partial match
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
}

// Initialize the chat app with the required selectors and responses file path
const app = new MessageApp('.messages-area', '.send-input', '.send-icon', 'Json/chat-bot-phrases.json', '.chat-circle');
