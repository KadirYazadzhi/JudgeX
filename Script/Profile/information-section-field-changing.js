class UserDataManager {
    constructor() {
        this.fields = ['username', 'email', 'password', 'country'];
        this.initialize();
    }

    initialize() {
        this.loadFields();
        this.setupEventListeners();
    }

    loadFields() {
        this.fields.forEach(field => {
            const element = document.getElementById(field);
            let storedValue = localStorage.getItem(`current${this.capitalize(field)}`) || '';

            if (field === "password" && storedValue) {
                storedValue = decryptPassword(storedValue);
            }

            if (element && storedValue) {
                if (field === 'password') {
                    element.textContent = '*'.repeat(storedValue.length);
                    element.setAttribute('data-password', storedValue);
                } else {
                    element.textContent = storedValue;
                }
            } else {
                element.textContent = "Please fill your data";
            }
        });

        const passwordIcon = document.getElementById('password-icon');
        if (passwordIcon) {
            passwordIcon.addEventListener('click', () => this.togglePasswordVisibility());
        }
    }

    setupEventListeners() {
        document.querySelectorAll('.input-user-data p[contenteditable="true"]').forEach(p => {
            p.addEventListener('blur', (event) => this.handleFieldBlur(event));
        });
    }

    handleFieldBlur(event) {
        const field = event.target.id;
        let newValue = event.target.textContent.trim();

        if (field === 'password') {
            event.target.setAttribute('data-password', newValue);
            newValue = '*'.repeat(newValue.length);
        }

        if (newValue === '' && field === 'password') {
            return;
        }

        const oldValue = localStorage.getItem(`current${this.capitalize(field)}`) || '';

        if (this.validateField(field, event.target.getAttribute('data-password') || newValue)) {
            if (newValue !== oldValue) {
                let finalValue = event.target.getAttribute('data-password') || newValue;

                if (field === 'password') {
                    finalValue = encryptPassword(finalValue); // Криптиране на паролата
                }

                localStorage.setItem(`current${this.capitalize(field)}`, finalValue);
                this.showSuccessMessage(field);
                if (field === "password") {
                    this.togglePasswordVisibility();
                }
            }
        } else {
            if (newValue !== '') {
                alert('Invalid input. Please try again.');
                this.restoreFieldValue(field, event.target);
            }
        }
    }

    togglePasswordVisibility() {
        const passwordElement = document.getElementById('password');
        const passwordIcon = document.getElementById('password-icon');
        if (passwordElement) {
            const isPasswordVisible = passwordElement.textContent === passwordElement.getAttribute('data-password');
            if (isPasswordVisible) {
                passwordElement.textContent = '*'.repeat(passwordElement.getAttribute('data-password').length);
                passwordIcon.classList.remove('fa-unlock');
                passwordIcon.classList.add('fa-lock');
            } else {
                passwordElement.textContent = passwordElement.getAttribute('data-password');
                passwordIcon.classList.remove('fa-lock');
                passwordIcon.classList.add('fa-unlock');
            }
        }
    }

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

    showSuccessMessage(field) {
        alert(`You successfully changed your ${field}`);
    }

    restoreFieldValue(field, element) {
        let value = localStorage.getItem(`current${this.capitalize(field)}`) || '';
        if (field === 'password' && value) {
            value = decryptPassword(value);
            value = '*'.repeat(value.length);
        }
        element.textContent = value;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new UserDataManager();
});
