// CardSlider class handles the logic for showing the active card and activating the corresponding dot
class CardSlider {
    constructor(cardsSelector, dotsSelector) {
        // Select the cards and dots based on provided selectors
        this.cards = document.querySelectorAll(cardsSelector);
        this.dots = document.querySelectorAll(dotsSelector);
        this.activeIndex = 1;

        // Check if cards and dots are available
        if (this.cards.length === 0 || this.dots.length === 0) return;

        // Initialize the active card
        this.updateActiveCard();
        // Add event listeners to the dots
        this.addEventListeners();
    }

    // Updates which card is displayed and which dot is active
    updateActiveCard() {
        this.cards.forEach((card, index) => {
            card.style.display = index === this.activeIndex ? "flex" : "none";
        });

        this.dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === this.activeIndex);
        });
    }

    // Adds event listeners to each dot for switching the active card
    addEventListeners() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                this.activeIndex = index;
                this.updateActiveCard();
            });
        });
    }

    // Starts the slider by displaying the active card
    start() {
        this.updateActiveCard();
    }

    // Stops the slider by resetting cards and dots to their initial state
    stop() {
        // Make all cards visible again
        this.cards.forEach(card => {
            card.style.display = "flex";
        });
        // Remove active class from all dots
        this.dots.forEach(dot => {
            dot.classList.remove("active");
        });
    }
}

// ResponsiveCardSlider class handles checking screen size and controlling the CardSlider behavior
class ResponsiveCardSlider {
    constructor(cardsSelector, dotsSelector) {
        this.cardsSelector = cardsSelector;
        this.dotsSelector = dotsSelector;
        this.sliderInstance = null;
        // Initially check the screen size and add an event listener to resize the screen
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize.bind(this));
    }

    // Checks if the screen width is less than 768px to start the slider or stop it
    checkScreenSize() {
        if (window.innerWidth < 768) {
            // If the slider isn't already started, initialize and start it
            if (!this.sliderInstance) {
                this.sliderInstance = new CardSlider(this.cardsSelector, this.dotsSelector);
                this.sliderInstance.start();
            }
        } else {
            // If the screen width is 768px or greater, stop the slider and reset cards
            if (this.sliderInstance) {
                this.sliderInstance.stop();
                this.sliderInstance = null;
            }
        }
    }
}

// Initialize the responsive card slider by passing the card and dot selectors
const responsiveSlider = new ResponsiveCardSlider(".leaderboard-card", ".leaderboard-dot");
