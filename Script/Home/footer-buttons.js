// Define a class to encapsulate the behavior of the footer buttons
class FooterButtonManager {
    constructor(footerSelector, extraButtonSelector) {
        // Initialize properties for the footer and extra buttons
        this.footerButtons = document.querySelector(footerSelector);
        this.extraButtonSelector = extraButtonSelector;

        // Bind the toggle method to maintain proper context
        this.toggleButtons = this.toggleButtons.bind(this);

        // Set up the event listener
        this.initialize();
    }

    // Method to initialize event listeners
    initialize() {
        if (this.footerButtons) {
            this.footerButtons.addEventListener('click', this.toggleButtons);
        }
    }

    // Method to handle button toggling
    toggleButtons() {
        this.footerButtons.classList.toggle('active'); // Add or remove the active class to trigger animation

        // Call external app logic if needed
        if (typeof chatBotApp !== 'undefined' && chatBotApp.secondPosition) {
            chatBotApp.secondPosition();
        }

        // Show or hide the extra buttons
        const extraButtons = document.querySelectorAll(this.extraButtonSelector);
        extraButtons.forEach(button => {
            button.classList.toggle('hidden');
        });
    }
}

// Wait for the DOM to load before initializing the class
document.addEventListener('DOMContentLoaded', () => {
    // Create an instance of FooterButtonManager
    new FooterButtonManager('.other-buttons', '.extra-button');
});
