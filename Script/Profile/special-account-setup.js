// Class to manage user details and special user logic
class UserDetails {
    constructor() {
        this.userDetailsBox = document.querySelector(".username-profile-box");
        this.initializeUserDetails();
    }

    /**
     * Check if the user is special
     * @returns {boolean} True if the user is special, false otherwise
     */
    isSpecialUser() {
        return getSpecialUser() !== null;
    }

    /**
     * Create and append a special user icon to the given container
     * @param {HTMLElement} container The container to append the icon to
     */
    addSpecialUserIcon(container) {
        const specialUserIcon = document.createElement('i');
        specialUserIcon.classList.add("fa-solid", "fa-user-secret");
        container.appendChild(specialUserIcon);
    }

    /**
     * Main function to initialize user details
     */
    initializeUserDetails() {
        if (this.isSpecialUser()) {
            this.addSpecialUserIcon(this.userDetailsBox);
        }
    }
}

// Initialize the UserDetails class when the script runs
new UserDetails();
