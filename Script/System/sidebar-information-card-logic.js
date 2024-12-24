// Class for managing information cards and filters
class InformationCard {
    constructor(iconClass, message, type) {
        this.iconClass = iconClass;
        this.message = message;
        this.type = type;
    }

    // Creates a DOM element for this information card
    createCardElement() {
        const card = document.createElement("div");
        card.className = "information-card";

        const iconDiv = document.createElement("div");
        iconDiv.className = "information-icon";
        const icon = document.createElement("i");
        icon.className = this.iconClass;
        iconDiv.appendChild(icon);

        const textSpan = document.createElement("span");
        textSpan.className = "information-text";
        textSpan.textContent = this.message;

        const dotDiv = document.createElement("div");
        dotDiv.className = `inf-type-dot ${this.type}`;

        card.appendChild(iconDiv);
        card.appendChild(textSpan);
        card.appendChild(dotDiv);

        return card;
    }
}

// Class for managing the info type cards (filter cards)
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

    // Handle clicks on the filter cards
    handleCardClick(card, index) {
        if (index === 0) {
            // If the "All" card is clicked
            if (card.classList.contains("activeInfo")) return;
            this.activateCard(card);
            this.filterCards("all");
        } else {
            // Logic for other filter cards
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

    // Filters the information cards based on the active filter cards
    filterCards(type = "") {
        // Get the active types from the filter cards
        const activeTypes = Array.from(this.getActiveCards())
            .map(card => card.classList[1])
            .filter(type => type !== 'all');

        // Show or hide information cards based on the active filter
        this.informationCards.forEach(infoCard => {
            const cardDot = infoCard.querySelector('.inf-type-dot');
            if (type === "all" || activeTypes.length === 0 || activeTypes.includes(cardDot.classList[1])) {
                infoCard.style.display = "flex"; // Show card
            } else {
                infoCard.style.display = "none"; // Hide card
            }
        });
    }

    // Activate the given card
    activateCard(card) {
        card.classList.add("activeInfo");
    }

    // Deactivate the given card
    deactivateCard(card) {
        card.classList.remove("activeInfo");
    }

    // Get a list of all active filter cards
    getActiveCards() {
        return document.querySelectorAll(".inf-type.activeInfo");
    }

    // Get a list of active filter cards excluding the "All" card
    getActiveNonFirstCards() {
        return document.querySelectorAll(".inf-type.activeInfo:not(:first-child)");
    }

    // Deactivate all filter cards except for the first ("All") card
    deactivateAllNonFirstCards() {
        this.cards.forEach((card, index) => {
            if (index !== 0) this.deactivateCard(card);
        });
    }
}

// Class to handle loading and managing information cards
class InformationCardsLoader {
    constructor(containerId, jsonPath) {
        this.container = document.getElementById(containerId);
        this.jsonPath = jsonPath;
    }

    // Load and create the information cards from the JSON file
    async loadCards() {
        const response = await fetch(this.jsonPath);
        const data = await response.json();

        // Create and append each card from the loaded data
        data.forEach(item => {
            const card = new InformationCard(item.iconClass, item.message, item.type);
            this.container.appendChild(card.createCardElement());
        });

        // Initialize the InfoTypeCardsManager after the cards have been created
        this.initializeInfoTypeCardsManager();
    }

    // Initialize the filter system after loading the cards
    initializeInfoTypeCardsManager() {
        const infoTypeCards = document.querySelectorAll(".inf-type");
        const informationCards = document.querySelectorAll(".information-card");
        new InfoTypeCardsManager(infoTypeCards, informationCards);
    }
}

// Initialize and load the information cards on page load
document.addEventListener("DOMContentLoaded", () => {
    const cardsLoader = new InformationCardsLoader("information-cards-container", "Json/information-about-system.json");
    cardsLoader.loadCards();
});
