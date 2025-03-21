// Class for handling the modals and menu interactions
class SearchManager {
    constructor() {
        this.container = document.querySelector("main");
        this.search = document.querySelector(".search label");
        this.current = document.querySelector(".current");
        this.menuItems = document.querySelectorAll("main .menu .primary .menu-item");
        this.searchInput = document.querySelector(".bar"); // Input field for search

        // Modals
        this.modals = {
            profile: document.getElementById('profile-information'),
            resume: document.getElementById('online-resume'),
            certificate: document.getElementById('certificate-section'),
            progress: document.getElementById('progress-container'),
            shop: document.getElementById('shop-section'),
            settings: document.getElementById('settings-section')
        };

        // Map of modal keys to their display names
        this.modalNames = {
            profile: "Profile Information",
            resume: "Online Resume",
            certificate: "Certificate Section",
            progress: "Progress Container",
            shop: "Shop Section",
            settings: "Settings Section"
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
                        this.showModal('settings');
                        break;
                    default:
                        break;
                }
            });
        });
    }

    // Handle search input
    handleSearch() {
        this.searchInput.addEventListener("input", (event) => {
            const searchText = event.target.value.toLowerCase().trim(); // Get the search text

            // Find the closest matching modal
            let closestModalKey = null;
            let closestMatchLength = Infinity;

            for (const [key, name] of Object.entries(this.modalNames)) {
                const lowerName = name.toLowerCase();
                if (lowerName.includes(searchText)) {
                    // If the search text is found in the modal name
                    if (searchText.length < closestMatchLength) {
                        closestModalKey = key;
                        closestMatchLength = searchText.length;
                    }
                }
            }

            // Show the closest matching modal
            if (closestModalKey) {
                this.showModal(closestModalKey);
                this.current.innerText = this.modalNames[closestModalKey]; // Update the current text
            }
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

        // Add event listener for search input
        this.handleSearch();
    }
}

// Initialize the ModalManager on page load
document.addEventListener("DOMContentLoaded", () => {
    const searchManager = new SearchManager();
});