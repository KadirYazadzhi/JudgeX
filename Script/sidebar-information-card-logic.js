class InfoTypeCardsManager {
    constructor(cards, informationCards) {
        this.cards = cards;
        this.informationCards = informationCards;
        this.firstCard = cards[0]; // The "All" card

        // Initialize by activating the "All" card and showing all information cards
        this.activateCard(this.firstCard);
        this.filterCards("all"); // Show all cards initially

        // Add event listeners to all cards
        this.cards.forEach((card, index) => {
            card.addEventListener('click', () => this.handleCardClick(card, index));
        });
    }

    /**
     * Handles the click event for the cards.
     * @param {HTMLElement} card - The card that was clicked.
     * @param {number} index - The index of the clicked card.
     */
    handleCardClick(card, index) {
        if (index === 0) {
            // If the "All" card is clicked
            if (card.classList.contains("activeInfo")) {
                // Do nothing if "All" card is active to prevent deactivation
                return;
            } else {
                // Activate "All" card and show all cards
                this.activateCard(card);
                this.filterCards("all");
            }
        } else {
            // Logic for other cards
            if (card.classList.contains("activeInfo")) {
                this.deactivateCard(card);
            } else {
                this.activateCard(card);
            }

            // Ensure that if exactly three non-first cards are active, the "All" card is activated
            if (this.getActiveNonFirstCards().length === 3) {
                this.deactivateAllNonFirstCards();
                this.activateCard(this.firstCard);
                this.filterCards("all");
            } else {
                // If no active cards are left, activate the "All" card
                if (this.getActiveCards().length === 0) {
                    this.activateCard(this.firstCard);
                    this.filterCards("all");
                } else {
                    this.deactivateCard(this.firstCard);
                    this.filterCards();
                }
            }
        }
    }

    /**
     * Filters the information cards based on the active card types.
     * @param {string} [type] - The type of card to filter by (e.g., 'most-important', 'important', 'non-essential', 'all').
     */
    filterCards(type = "") {
        // Get all active card types excluding the "All" card
        const activeTypes = Array.from(this.getActiveCards())
            .map(card => card.classList[1])
            .filter(type => type !== 'all');

        this.informationCards.forEach(infoCard => {
            const cardDot = infoCard.querySelector('.inf-type-dot');

            if (type === "all" || activeTypes.length === 0 || activeTypes.includes(cardDot.classList[1])) {
                infoCard.style.display = "flex"; // Show card
            } else {
                infoCard.style.display = "none"; // Hide card
            }
        });
    }

    /**
     * Activates the specified card by adding the "activeInfo" class.
     * @param {HTMLElement} card - The card to activate.
     */
    activateCard(card) {
        card.classList.add("activeInfo");
    }

    /**
     * Deactivates the specified card by removing the "activeInfo" class.
     * @param {HTMLElement} card - The card to deactivate.
     */
    deactivateCard(card) {
        card.classList.remove("activeInfo");
    }

    /**
     * Retrieves a list of all active cards.
     * @returns {NodeList} - A list of active cards.
     */
    getActiveCards() {
        return document.querySelectorAll(".inf-type.activeInfo");
    }

    /**
     * Retrieves a list of all active cards except the first card.
     * @returns {NodeList} - A list of active cards excluding the first one.
     */
    getActiveNonFirstCards() {
        return document.querySelectorAll(".inf-type.activeInfo:not(:first-child)");
    }

    /**
     * Deactivates all cards except the first one.
     */
    deactivateAllNonFirstCards() {
        this.cards.forEach((card, index) => {
            if (index !== 0) {
                this.deactivateCard(card);
            }
        });
    }
}

// Select all cards from the top bar and all information cards
const infoTypeCards = document.querySelectorAll(".inf-type");
const informationCards = document.querySelectorAll(".information-card");

// Initialize the InfoTypeCardsManager with both the type cards and information cards
const infoTypeCardsManager = new InfoTypeCardsManager(infoTypeCards, informationCards);
