document.addEventListener('DOMContentLoaded', function () {
    class CardMenu {
        constructor(menuSelector, containerSelector) {
            this.menu = document.querySelector(menuSelector);
            this.container = document.querySelector(containerSelector);
            this.isHidden = this.container.classList.contains("hidden");

            this.initEventListeners();
        }

        // Initialize the event listeners for the menu
        initEventListeners() {
            this.menu.addEventListener('click', this.toggleMenu.bind(this));
        }

        // Toggle the hidden state of the container
        toggleMenu() {
            if (this.isHidden) {
                this.showMenu();
            } else {
                this.hideMenu();
            }
        }

        // Show the menu
        showMenu() {
            this.container.classList.remove("hidden");
            this.isHidden = false;
        }

        // Hide the menu
        hideMenu() {
            this.container.classList.add("hidden");
            this.isHidden = true;
        }
    }

    // Instantiate the CardMenu class for the specific menu and container elements
    const dotsCardMenu = new CardMenu(".card-menu", ".type-time-container");
});
