class CardManager {
    constructor(cardSelector) {
        this.cards = document.querySelectorAll(cardSelector);
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.onCardClick(card));
        });
    }

    onCardClick(clickedCard) {
        const selectedButton = localStorage.getItem('selectedButton');

        const activeClass = `active${this.mapButtonToDifficulty(selectedButton)}`;
        if (clickedCard.classList.contains(activeClass)) {
            clickedCard.classList.remove(activeClass);
            localStorage.removeItem('selectedCardIndex');
        }
        else {
            this.removeActiveClasses();
            clickedCard.classList.add(activeClass);
            const cardIndex = Array.from(this.cards).indexOf(clickedCard);
            localStorage.setItem('selectedCardIndex', cardIndex);
        }
    }

    removeActiveClasses() {
        this.cards.forEach(card => {
            card.classList.remove('activeBasic', 'activeMedium', 'activeHard', 'activeVeryHard', 'activeSpecial');
        });
    }

    mapButtonToDifficulty(buttonNumber) {
        switch (buttonNumber) {
            case '1':
                return 'Basic';
            case '2':
                return 'Medium';
            case '3':
                return 'Hard';
            case '4':
                return 'VeryHard';
            case '5':
                return 'Special';
            default:
                return '';
        }
    }
}

class ExternalLanguageClass {
    constructor(cardManager) {
        this.cardManager = cardManager;  // Receive the CardManager instance
    }

    // Method to trigger onCardClick programmatically
    triggerCardClick(cardIndex) {
        const card = this.cardManager.cards[cardIndex];
        if (card) {
            this.cardManager.onCardClick(card);  // Directly call onCardClick
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const cardManager = new CardManager('.swiper-slide'); // Initialize CardManager
    const externalLanguageClass = new ExternalLanguageClass(cardManager); // Pass CardManager to ExternalLanguageClass
    const buttonManager = new ButtonManager('.button', externalLanguageClass); // Pass ExternalLanguageClass to ButtonManager

    function levelButtonClick() {
        const selectedButtonNumber = localStorage.getItem('selectedButton');
        if (selectedButtonNumber) {
            const selectedButton = document.querySelectorAll('.button')[selectedButtonNumber - 1];
            if (selectedButton) {
                selectedButton.click();
            }
        }
    }
    levelButtonClick();
});


