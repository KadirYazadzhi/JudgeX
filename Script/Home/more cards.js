class LanguageCardManager {
    constructor(buttonId, cardClass) {
        this.button = document.getElementById(buttonId);
        this.cards = document.querySelectorAll(`.${cardClass}`);
        this.initialize();
    }

    initialize() {
        this.button.addEventListener('click', () => this.toggleCards());
    }

    toggleCards() {
        if (this.button.textContent.includes('More')) {
            this.displayCards();
        } else {
            this.hideCards();
        }
    }

    displayCards() {
        this.cards.forEach(card => {
            card.style.display = 'grid';
        });
        this.button.innerHTML = 'Less language &uarr;';
    }

    hideCards() {
        this.cards.forEach(card => {
            card.style.display = 'none';
        });
        this.button.innerHTML = 'More language &darr;';
    }
}

const languageCardManager = new LanguageCardManager('more-language-cards', 'special-card-slider');

