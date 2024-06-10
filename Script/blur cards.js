class Carousel {
    constructor(cardSelector, dotSelector) {
        this.cards = document.querySelectorAll(cardSelector);
        this.dots = document.querySelectorAll(dotSelector);
        this.currentIndex = 0;
        this.startX = 0;
        this.endX = 0;
        this.init();
    }

    init() {
        this.dots.forEach(dot => {
            dot.addEventListener('click', (event) => this.onDotClick(event));
        });

        document.querySelector('.blur-cards').addEventListener('touchstart', (event) => this.onTouchStart(event));
        document.querySelector('.blur-cards').addEventListener('touchend', (event) => this.onTouchEnd(event));

        this.showCard(this.currentIndex);
        this.autoSlide();
    }

    onDotClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'));
        this.showCard(index);
    }

    onTouchStart(event) {
        this.startX = event.touches[0].clientX;
    }

    onTouchEnd(event) {
        this.endX = event.changedTouches[0].clientX;
        this.handleSwipe();
    }

    handleSwipe() {
        if (this.startX - this.endX > 50) {
            this.nextCard();
        } else if (this.endX - this.startX > 50) {
            this.prevCard();
        }
    }

    showCard(index) {
        this.cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
            this.dots[i].classList.toggle('active', i === index);
        });
        this.currentIndex = index;
    }

    nextCard() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.showCard(nextIndex);
    }

    prevCard() {
        const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.showCard(prevIndex);
    }

    autoSlide() {
        setInterval(() => this.nextCard(), 9000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Carousel('.blur-card', '.dot');
});
