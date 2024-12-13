class ProfileManager {
    constructor() {
        // Select the profile image element
        this.profileImage = document.querySelector(".profile-image");
        // Initialize the event listener for the profile image
        this.addClickEventListener();
    }

    // Method to add an event listener to the profile image
    addClickEventListener() {
        this.profileImage.addEventListener('click', () => this.handleProfileClick());
    }

    // Method to handle the click event on the profile image
    handleProfileClick() {
        if (this.isUserRegistered()) {
            // If the user is registered, redirect to the profile page
            this.redirectToProfile();
        } else {
            // If the user is not registered, show an alert message
            this.showLoginAlert();
        }
    }

    // Method to check if the user is registered by looking into localStorage
    isUserRegistered() {
        return localStorage.getItem("user-register") !== null;
    }

    // Method to redirect the user to the profile page
    redirectToProfile() {
        window.location.href = "profile.html";
    }

    // Method to show an alert asking the user to log in or sign up
    showLoginAlert() {
        alert("Please log in or sign up first.");
    }

    // Static method to initialize the ProfileManager when needed
    static initialize() {
        new ProfileManager();
    }
}

// Initialize the ProfileManager when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    ProfileManager.initialize();
});
