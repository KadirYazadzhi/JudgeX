class NavigationManager {
    constructor() {
        // Select all the cards inside both div containers
        this.cards = document.querySelectorAll('.github-card');
        // Initialize event listeners for each card
        this.addEventListeners();
    }

    // Method to add event listeners to each card
    addEventListeners() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.handleCardClick(card));
        });
    }

    // Method to handle click events and redirect based on card content
    handleCardClick(card) {
        const pageName = card.querySelector('p').textContent.trim().toLowerCase();
        let url = this.getRedirectUrl(pageName);

        // Redirect if a valid URL is found
        if (url) {
            window.location.href = url;
        } else {
            console.error("No URL found for the selected card.");
        }
    }

    // Method to map the content of each card to a specific URL
    getRedirectUrl(pageName) {
        switch (pageName) {
            case 'github':
                return 'https://github.com/KadirYazadzhi/JudgeX';
            case 'report':
                return 'https://github.com/KadirYazadzhi/JudgeX/issues/new';
            case 'portfolio':
                return 'https://kadiryazadzhi.github.io/portfolio/';
            case 'instagram':
                return 'https://www.instagram.com/_qzadji_?igsh=bGx3djFjeHhheTFm';
            case 'facebook':
                return 'https://www.facebook.com/kadir.yazadji.1';
            case 'email':
                return 'mailto:kadiryazadzhi@gmail.com';
            default:
                return null; // Return null if no match is found
        }
    }

    // Static method to initialize the class once the DOM is fully loaded
    static initialize() {
        document.addEventListener('DOMContentLoaded', () => {
            new NavigationManager();
        });
    }
}

// Initialize the NavigationManager when the DOM is fully loaded
NavigationManager.initialize();
