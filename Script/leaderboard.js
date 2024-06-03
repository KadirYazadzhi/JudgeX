class CardSlider {
    constructor(cards, dots) {
        this.cards = cards;
        this.dots = dots;
        this.currentIndex = 0;

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.showCard(index));
        });

        this.initialize();
    }

    initialize() {
        const activeDotIndex = this.dots.findIndex(dot => dot.classList.contains('active'));
        if (activeDotIndex !== -1) {
            this.currentIndex = activeDotIndex;
        }

        this.showCard(this.currentIndex);
    }

    showCard(index) {
        this.cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.container'));
    const dots = Array.from(document.querySelectorAll('.dot'));

    new CardSlider(cards, dots);
});
