// Class for handling the modals and menu interactions
class ModalManager {
    constructor() {
        this.container = document.querySelector("main");
        this.search = document.querySelector(".search label");
        this.current = document.querySelector(".current");
        this.menuItems = document.querySelectorAll("main .menu .primary .menu-item");

        // Modals
        this.modals = {
            profile: document.getElementById('profile-information'),
            resume: document.getElementById('online-resume'),
            certificate: document.getElementById('certificate-section'),
            progress: document.getElementById('progress-container'),
            shop: document.getElementById('shop-section'),
        };

        // Initialize the app
        this.initialize();
    }

    // Hide all modals
    hideAllModals() {
        Object.values(this.modals).forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Show a specific modal by its key
    showModal(modalKey) {
        this.hideAllModals();  // Hide all modals before showing the selected one
        if (this.modals[modalKey]) {
            this.modals[modalKey].style.display = 'grid';  // Show the selected modal
        }
    }

    // Add event listeners to menu items
    addMenuListeners() {
        this.menuItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                // Update the current text
                this.current.innerText = item.querySelector(".desc").textContent;

                // Remove 'active' class from all menu items
                this.menuItems.forEach(item => item.classList.remove("active"));

                // Add 'active' class to the clicked menu item
                item.classList.add("active");

                // Show the appropriate modal based on the clicked item
                switch (index) {
                    case 0:
                        this.showModal('profile');
                        break;
                    case 1:
                        this.showModal('resume');
                        break;
                    case 2:
                        this.showModal('progress');
                        break;
                    case 3:
                        this.showModal('certificate');
                        break;
                    case 4:
                        this.showModal('shop');
                        break;
                    case 5:
                        // Logic for modal 6 (if needed)
                        break;
                    default:
                        break;
                }
            });
        });
    }

    // Initialize the app
    initialize() {
        // Set profileInformationModal to be visible by default
        this.showModal('profile');

        // Fix for touch events on mobile devices
        document.addEventListener("touchstart", () => {}, true);

        // Expand search bar on click
        this.search.addEventListener("click", () => {
            this.container.classList.toggle("search-expanded");
        });

        // Add event listeners to menu items
        this.addMenuListeners();
    }
}

// Initialize the ModalManager on page load
document.addEventListener("DOMContentLoaded", () => {
    const modalManager = new ModalManager();
});
