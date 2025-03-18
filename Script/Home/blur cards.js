class Carousel {
    constructor(cardSelector, dotSelector) {
        this.cards = document.querySelectorAll(cardSelector);
        this.dots = document.querySelectorAll(dotSelector);
        this.currentIndex = 0;
        this.startX = 0;
        this.endX = 0;

        // Initialize the carousel
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
            card.classList.toggle('activeCard', i === index);  // Activate the corresponding card
        });

        this.dots.forEach((dot, i) => {
            // Add both 'active' and 'activeCard' classes to the dot
            dot.classList.toggle('active', i === index);  // This highlights the active dot
            dot.classList.toggle('activeCard', i === index);  // This activates the dot with the card
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
        this.autoSlideInterval = setInterval(() => this.nextCard(), 9000);
    }

    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }

    startAutoSlide() {
        this.autoSlide();
    }
}

// Initialize the carousel if the screen width is smaller than 768px
let carouselInstance = null;

function initializeCarousel() {
    if (window.innerWidth < 768) {
        if (!carouselInstance) {
            carouselInstance = new Carousel('.blur-card', '.blur-dot');
        }
    } else {
        if (carouselInstance) {
            carouselInstance.stopAutoSlide();
            carouselInstance = null;
        }
    }
}

// Call the function once on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
});

// Reinitialize on window resize
window.addEventListener('resize', () => {
    initializeCarousel();
});
