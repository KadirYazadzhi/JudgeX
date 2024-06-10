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
        this.cards.forEach(card => card.classList.remove('active'));
        clickedCard.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cardManager = new CardManager('.swiper-slide');
});
