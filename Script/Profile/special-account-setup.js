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
    addUserIcon(container, iconType) {
        const userIcon = document.createElement('i');
        userIcon.classList.add("fa-solid", iconType);
        container.appendChild(userIcon);
    }

    /**
     * Main function to initialize user details
     */
    initializeUserDetails() {
        if (this.isSpecialUser()) {
            this.addUserIcon(this.userDetailsBox, "fa-user-secret");
        }
        else if (getDiamond() >= 5000) {
            this.addUserIcon(this.userDetailsBox, "fa-user-ninja");
        }
        else {
            this.addUserIcon(this.userDetailsBox, "fa-user-tie");
        }
    }
}

// Initialize the UserDetails class when the script runs
new UserDetails();
