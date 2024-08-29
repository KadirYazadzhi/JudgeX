class CardManager {
    constructor(selector) {
        this.cards = document.querySelectorAll(selector);
    }

    initialize() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.handleCardClick(card));
        });
    }

    handleCardClick(card) {
        const iconCard = card.querySelector('.card-icon');
        if (iconCard) {
            const iconText = iconCard.textContent.trim();
            this.displayAlertBasedOnIcon(iconText);
        }
    }

    displayAlertBasedOnIcon(iconText) {
        switch (iconText) {
            case "➖":
                alert("Please submit your code to view the test result.");
                break;
            case "❌":
                alert("The result of this test is 'Failed'. Your code is not fully correct.");
                break;
            default:
                alert("The result of this test is 'Passed.' Your code is likely correct.");
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cardManager = new CardManager('.card');
    cardManager.initialize();
});

