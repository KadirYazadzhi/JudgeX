document.addEventListener("DOMContentLoaded", function () {
    class CardSlider {
        constructor(containerSelector, cardSelector) {
            this.cardsContainer = document.querySelector(containerSelector);
            this.cards = document.querySelectorAll(cardSelector);

            if (!this.cardsContainer || this.cards.length === 0) return;

            this.startX = 0;
            this.currentIndex = 0;
            this.isDragging = false;

            this.init();
            this.addEventListeners();
        }

        init() {
            this.cards.forEach(card => {
                card.style.width = window.innerWidth + 'px';
            });
            this.cardsContainer.style.width = this.cards.length * window.innerWidth + 'px';
            this.updatePosition();
        }

        updatePosition(smooth = true) {
            this.cardsContainer.style.transition = smooth ? "transform 0.3s ease" : "none";
            this.cardsContainer.style.transform = `translateX(${-this.currentIndex * window.innerWidth}px)`;
        }

        // TOUCH EVENTS
        onTouchStart(e) {
            this.startX = e.touches[0].clientX;
            this.isDragging = true;
            this.cardsContainer.style.transition = "none";
        }

        onTouchMove(e) {
            if (!this.isDragging) return;
            let moveX = e.touches[0].clientX - this.startX;
            this.moveSlider(moveX);
        }

        onTouchEnd(e) {
            if (!this.isDragging) return;
            this.isDragging = false;
            let moveX = e.changedTouches[0].clientX - this.startX;
            this.snapToCard(moveX);
        }

        // MOUSE EVENTS
        onMouseDown(e) {
            this.startX = e.clientX;
            this.isDragging = true;
            this.cardsContainer.style.transition = "none";
        }

        onMouseMove(e) {
            if (!this.isDragging) return;
            let moveX = e.clientX - this.startX;
            this.moveSlider(moveX);
        }

        onMouseUp(e) {
            if (!this.isDragging) return;
            this.isDragging = false;
            let moveX = e.clientX - this.startX;
            this.snapToCard(moveX);
        }

        moveSlider(moveX) {
            let nextPosition = -this.currentIndex * window.innerWidth + moveX;
            if (nextPosition <= 0 && nextPosition >= -(this.cards.length - 1) * window.innerWidth) {
                this.cardsContainer.style.transform = `translateX(${nextPosition}px)`;
            }
        }

        snapToCard(moveX) {
            if (moveX < -50 && this.currentIndex < this.cards.length - 1) {
                this.currentIndex++;
            } else if (moveX > 50 && this.currentIndex > 0) {
                this.currentIndex--;
            }
            this.updatePosition();
        }

        addEventListeners() {
            // Touch events
            this.cardsContainer.addEventListener("touchstart", this.onTouchStart.bind(this));
            this.cardsContainer.addEventListener("touchmove", this.onTouchMove.bind(this));
            this.cardsContainer.addEventListener("touchend", this.onTouchEnd.bind(this));

            // Mouse events
            this.cardsContainer.addEventListener("mousedown", this.onMouseDown.bind(this));
            document.addEventListener("mousemove", this.onMouseMove.bind(this));
            document.addEventListener("mouseup", this.onMouseUp.bind(this));
        }

        destroy() {
            this.cardsContainer.removeEventListener("touchstart", this.onTouchStart.bind(this));
            this.cardsContainer.removeEventListener("touchmove", this.onTouchMove.bind(this));
            this.cardsContainer.removeEventListener("touchend", this.onTouchEnd.bind(this));

            this.cardsContainer.removeEventListener("mousedown", this.onMouseDown.bind(this));
            document.removeEventListener("mousemove", this.onMouseMove.bind(this));
            document.removeEventListener("mouseup", this.onMouseUp.bind(this));

            // Reset to initial position
            this.cardsContainer.style.transition = "none";
            this.cardsContainer.style.transform = "translateX(0)";
            this.currentIndex = 0;
        }
    }

    let sliderInstance = null;

    function checkScreenSize() {
        if (window.innerWidth < 768) {
            if (!sliderInstance) {
                sliderInstance = new CardSlider(".cards", ".card");
            }
        } else {
            if (sliderInstance) {
                sliderInstance.destroy();
                sliderInstance = null;
            }

            // Ensure the cards return to normal layout and style when screen is larger than 768px
            const cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.style.width = "";  // Remove custom width for the cards
            });

            // Remove styles that were applied when screen size was less than 768px
            const cardsContainer = document.querySelector(".cards");
            cardsContainer.style.width = "";
            cardsContainer.style.transition = "";
            cardsContainer.style.transform = "";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});

