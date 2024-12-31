// Define a ChatBot class to encapsulate chatbot functionality
class ChatBot {
    constructor(chatBotContainerId, messageContainerSelector, closeButtonSelector, openButtonSelector) {
        this.chatBotContainer = document.getElementById(chatBotContainerId);
        this.messageContainer = document.querySelector(messageContainerSelector);
        this.chatBotCloseButton = document.querySelector(closeButtonSelector);
        this.chatBotOpenButton = document.querySelector(openButtonSelector);

        this.initEventListeners(); // Initialize event listeners
    }

    // Initialize event listeners for opening and closing the chatbot
    initEventListeners() {
        this.chatBotOpenButton.addEventListener("click", () => this.openChatBot());
        this.chatBotCloseButton.addEventListener("click", () => this.closeChatBot());
    }

    // Open the chatbot and display the initial message if necessary
    openChatBot() {
        setTimeout(() => this.chatBotContainer.classList.add("open-chat-container"), 200);

        // If the message container is empty, show the starting message
        if (this.messageContainer.textContent === "") {
            app.startingMessageFromBot();
        }
    }

    secondPosition() {
        if (!this.chatBotContainer.classList.contains("open-chat-container")) return;

        if (this.chatBotContainer.classList.contains("chat-bot-container-second-position")) {
            this.chatBotContainer.classList.remove("chat-bot-container-second-position");
        }
        else {
            this.chatBotContainer.classList.add("chat-bot-container-second-position")
        }

    }

    // Close the chatbot
    closeChatBot() {
        this.chatBotContainer.classList.remove("open-chat-container");
    }

}

// Instantiate the ChatBot class with the appropriate DOM selectors
const chatBotApp = new ChatBot(
    "chat-bot",
    ".messages-area",
    ".close i",
    ".extra-button-2"
);
