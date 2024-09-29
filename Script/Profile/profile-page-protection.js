class UserAuthentication {
    constructor() {
        // Check if the user is registered when the class is instantiated
        this.checkUserRegistration();
    }

    // Method to check if the user is registered by looking into localStorage
    checkUserRegistration() {
        const isUserRegistered = localStorage.getItem("user-register");
        if (!isUserRegistered) {
            // If not registered, redirect to the login page
            this.redirectToLogin();
        }
    }

    // Method to handle the redirection to the login page
    redirectToLogin() {
        window.location.href = "index.html";
    }

    // Static method to initialize the class when the DOM is fully loaded
    static initialize() {
        document.addEventListener('DOMContentLoaded', () => {
            new UserAuthentication();
        });
    }
}

// Initialize the UserAuthentication class once the page has fully loaded
UserAuthentication.initialize();
