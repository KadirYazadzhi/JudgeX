document.addEventListener("DOMContentLoaded", function () {
    class CardSlider {
        constructor(containerSelector, cardSelector) {
            this.cardsContainer = document.querySelector(containerSelector);
            this.cards = document.querySelectorAll(cardSelector);

            this.startX = 0;
            this.currentIndex = 0;
            this.isDragging = false;

            if (window.innerWidth >= 768) return;

            this.init();
            this.addEventListeners();
        }

        // Initialize slider by setting the correct width for cards
        init() {
            this.cards.forEach(card => {
                card.style.width = window.innerWidth + 'px';
            });
            this.cardsContainer.style.width = this.cards.length * window.innerWidth + 'px';
            this.updatePosition();
        }

        // Update card position with optional smooth transition
        updatePosition(smooth = true) {
            this.cardsContainer.style.transition = smooth ? "transform 0.3s ease" : "none";
            this.cardsContainer.style.transform = `translateX(${-this.currentIndex * window.innerWidth}px)`;
        }

        // Handle touch start
        onTouchStart(e) {
            this.startX = e.touches[0].clientX;
            this.isDragging = true;
            this.cardsContainer.style.transition = "none";
        }

        // Handle touch move
        onTouchMove(e) {
            if (!this.isDragging) return;
            let moveX = e.touches[0].clientX - this.startX;

            let nextPosition = -this.currentIndex * window.innerWidth + moveX;
            if (nextPosition <= 0 && nextPosition >= -(this.cards.length - 1) * window.innerWidth) {
                this.cardsContainer.style.transform = `translateX(${nextPosition}px)`;
            }
        }

        // Handle touch end
        onTouchEnd(e) {
            if (!this.isDragging) return;
            this.isDragging = false;

            let moveX = e.changedTouches[0].clientX - this.startX;

            if (moveX < -50 && this.currentIndex < this.cards.length - 1) {
                this.currentIndex++; // Move to the next card
            } else if (moveX > 50 && this.currentIndex > 0) {
                this.currentIndex--; // Move to the previous card
            }

            this.updatePosition();
        }

        // Add event listeners for touch interactions
        addEventListeners() {
            this.cardsContainer.addEventListener("touchstart", (e) => this.onTouchStart(e));
            this.cardsContainer.addEventListener("touchmove", (e) => this.onTouchMove(e));
            this.cardsContainer.addEventListener("touchend", (e) => this.onTouchEnd(e));
        }
    }

    new CardSlider(".cards", ".card");
});
