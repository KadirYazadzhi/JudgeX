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

            if (element && storedValue) {
                if (field === 'password') {
                    // Always set the text content to masked password
                    element.textContent = '*'.repeat(storedValue.length);
                    element.setAttribute('data-password', storedValue);
                } else {
                    element.textContent = storedValue;
                }
            }
            else {
                element.textContent = "Please fill your data";
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

        if (field === 'password') {
            // Save only the new value (password is stored in data-password attribute)
            event.target.setAttribute('data-password', newValue);
            newValue = '*'.repeat(newValue.length); // Mask the password for display
        }

        if (newValue === '' && field === 'password' ) {
            // If no new password is entered, skip validation
            return;
        }

        const oldValue = localStorage.getItem(`current${this.capitalize(field)}`) || '';

        if (this.validateField(field, event.target.getAttribute('data-password') || newValue)) {
            if (newValue !== oldValue) {
                // Update localStorage with the new value
                localStorage.setItem(`current${this.capitalize(field)}`, event.target.getAttribute('data-password') || newValue);
                this.showSuccessMessage(field);
                if (field === "password") {
                    this.togglePasswordVisibility();
                }
            }
        } else {
            if (newValue !== '') {
                // Show error message only if newValue is not empty
                alert('Invalid input. Please try again.');
                this.restoreFieldValue(field, event.target);
            }
        }
    }

    // Toggle password visibility
    togglePasswordVisibility() {
        const passwordElement = document.getElementById('password');
        const passwordIcon = document.getElementById('password-icon');
        if (passwordElement) {
            const isPasswordVisible = passwordElement.textContent === passwordElement.getAttribute('data-password');
            if (isPasswordVisible) {
                // Hide password
                passwordElement.textContent = '*'.repeat(passwordElement.getAttribute('data-password').length);
                passwordIcon.classList.remove('fa-unlock'); // Remove unlocked icon
                passwordIcon.classList.add('fa-lock');    // Add locked icon
            } else {
                // Show password
                passwordElement.textContent = passwordElement.getAttribute('data-password');
                passwordIcon.classList.remove('fa-lock');  // Remove locked icon
                passwordIcon.classList.add('fa-unlock');   // Add unlocked icon
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
