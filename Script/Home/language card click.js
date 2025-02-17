class CardManager {
    constructor(cardSelector, buttonSelector) {
        this.cards = document.querySelectorAll(cardSelector);
        this.buttons = document.querySelectorAll(buttonSelector);
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.onCardClick(card));
        });
    }

    onCardClick(clickedCard) {
        if (!this.HaveLevelButtonActive()) {
            alert('Please choose difficulty level first.');
            return;
        }

        const selectedButton = localStorage.getItem('selectedButton');
        const activeClass = `active${this.mapButtonToDifficulty(selectedButton)}`;

        if (clickedCard.classList.contains(activeClass)) {
            clickedCard.classList.remove(activeClass);
            localStorage.removeItem('selectedCardIndex');
        } else {
            this.removeActiveClasses();
            clickedCard.classList.add(activeClass);
            const cardIndex = Array.from(this.cards).indexOf(clickedCard);
            localStorage.setItem('selectedCardIndex', cardIndex);
        }
    }

    HaveLevelButtonActive() {
        return Array.from(this.buttons).some(button => button.classList.contains("hover-active"));
    }

    removeActiveClasses() {
        const activeClasses = ['activeBasic', 'activeMedium', 'activeHard', 'activeVeryHard', 'activeSpecial'];
        this.cards.forEach(card => {
            activeClasses.forEach(activeClass => card.classList.remove(activeClass));
        });
    }

    mapButtonToDifficulty(buttonNumber) {
        switch (buttonNumber) {
            case '1': return 'Basic';
            case '2': return 'Medium';
            case '3': return 'Hard';
            case '4': return 'VeryHard';
            case '5': return 'Special';
            default: return '';
        }
    }

    restoreSelectedCard() {
        const selectedCardIndex = localStorage.getItem('selectedCardIndex');
        const selectedButton = localStorage.getItem('selectedButton');

        if (selectedCardIndex !== null && selectedButton !== null) {
            const card = this.cards[selectedCardIndex];
            if (card) {
                const activeClass = `active${this.mapButtonToDifficulty(selectedButton)}`;
                card.classList.add(activeClass);
            }
        }
    }

}

class ExternalLanguageClass {
    constructor(cardManager) {
        this.cardManager = cardManager;
    }

    triggerCardClick(cardIndex) {
        const card = this.cardManager.cards[cardIndex];
        if (card) {
            this.cardManager.onCardClick(card);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cardManager = new CardManager('.swiper-slide', '.button');
    const externalLanguageClass = new ExternalLanguageClass(cardManager);
    const buttonManager = new ButtonManager('.button', externalLanguageClass);

    buttonManager.restoreSelectedButton();
    cardManager.restoreSelectedCard();

    function checkAndRemoveInactiveCards() {
        if (!cardManager.HaveLevelButtonActive()) {
            cardManager.removeActiveClasses();
            localStorage.removeItem('selectedCardIndex');
        }
    }

    cardManager.buttons.forEach(button => {
        button.addEventListener('click', checkAndRemoveInactiveCards);
    });

    checkAndRemoveInactiveCards();
});
