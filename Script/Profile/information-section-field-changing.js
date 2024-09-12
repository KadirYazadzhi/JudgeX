class UserDataManager {
    constructor() {
        this.fields = ['username', 'email', 'password', 'country'];
        this.initialize();
    }

    // Initialize by loading data and setting up event listeners
    initialize() {
        this.loadFields();
        this.setupEventListeners();
    }

    // Load values from localStorage and update fields
    loadFields() {
        this.fields.forEach(field => {
            const element = document.getElementById(field);
            let storedValue = localStorage.getItem(`current${this.capitalize(field)}`) || '';

            if (element) {
                if (field === 'password') {
                    element.textContent = '*'.repeat(storedValue.length);
                    element.setAttribute('data-password', storedValue);
                }
                else {
                    element.textContent = storedValue;
                }
            }
        });

        // Setup password visibility toggle
        const passwordIcon = document.getElementById('password-icon');
        if (passwordIcon) {
            passwordIcon.addEventListener('click', () => this.togglePasswordVisibility());
        }
    }

    // Set up event listeners for editable fields
    setupEventListeners() {
        document.querySelectorAll('.input-user-data p[contenteditable="true"]').forEach(p => {
            p.addEventListener('blur', (event) => this.handleFieldBlur(event));
        });
    }

    // Handle field blur event to update localStorage and provide feedback
    handleFieldBlur(event) {
        const field = event.target.id;
        let newValue = event.target.textContent.trim();
        const oldValue = localStorage.getItem(`current${this.capitalize(field)}`) || '';

        // For password, use the value from data attribute
        if (field === 'password') {
            newValue = event.target.getAttribute('data-password');
        }

        if (this.validateField(field, newValue)) {
            if (newValue !== oldValue) {
                localStorage.setItem(`current${this.capitalize(field)}`, newValue);
                this.showSuccessMessage(field);
            }
        } else {
            alert('Invalid input. Please try again.');
            this.restoreFieldValue(field, event.target);
        }
    }

    // Toggle password visibility
    togglePasswordVisibility() {
        const passwordElement = document.getElementById('password');
        if (passwordElement) {
            const isPasswordVisible = passwordElement.textContent === passwordElement.getAttribute('data-password');
            if (isPasswordVisible) {
                passwordElement.textContent = '*'.repeat(passwordElement.getAttribute('data-password').length);
            } else {
                passwordElement.textContent = passwordElement.getAttribute('data-password');
            }
        }
    }

    // Validate field based on its type
    validateField(field, value) {
        switch (field) {
            case 'username':
                return /^[a-zA-Z0-9_]{3,15}$/.test(value);
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case 'password':
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
            case 'country':
                return /^[a-zA-Z\s]+$/.test(value);
            default:
                return false;
        }
    }

    // Show success message after field change
    showSuccessMessage(field) {
        if (field === 'country') {
            alert(`You successfully changed your ${field} name`);
        } else {
            alert(`You successfully changed your ${field}`);
        }
    }

    // Restore the original value of the field if validation fails
    restoreFieldValue(field, element) {
        let value = localStorage.getItem(`current${this.capitalize(field)}`) || '';
        if (field === 'password') {
            value = '*'.repeat(value.length);
        }
        element.textContent = value;
    }

    // Capitalize the first letter of a string
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Initialize the UserDataManager class when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new UserDataManager();
});
