// Import the CryptoJS library (if using npm)
// const CryptoJS = require("crypto-js");

class RegisterForm {
    constructor(toggleButtonId, formSelector, closeButtonId, signUpInputId, formTitleId, registerBtnId, forgetPasswordTextId) {
        // Initialize elements from the DOM
        this.toggleButton = document.getElementById(toggleButtonId);
        this.form = document.querySelector(formSelector);
        this.closeButton = document.getElementById(closeButtonId);
        this.signUpInput = document.getElementById(signUpInputId);
        this.formTitle = document.getElementById(formTitleId);
        this.registerBtn = document.getElementById(registerBtnId);
        this.forgetPasswordText = document.getElementById(forgetPasswordTextId);

        this.isSignUpMode = false;

        // Elements for validation
        this.userName = document.getElementById('username');
        this.userEmail = document.getElementById('userEmail');
        this.userPassword = document.getElementById('password');

        this.init();
        this.checkUserStatus(); // Check user status on initialization
    }

    init() {
        // Add event listeners
        this.toggleButton.addEventListener('click', () => this.toggleMode());
        this.closeButton.addEventListener('click', () => this.closeForm());

        // Handle form submission on Enter or Space key press
        const handleKeyPress = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent default behavior (e.g., scrolling on Space)
                this.handleFormSubmit(e);
            }
        };

        // Add keydown event listener to the entire document
        document.addEventListener('keydown', handleKeyPress);

        // Add click event listener to the register button
        this.registerBtn.addEventListener('click', (e) => this.handleFormSubmit(e));

        // Add validation events
        this.userName.addEventListener('input', () => this.validateField(this.userName));
        this.userEmail.addEventListener('input', () => this.validateField(this.userEmail));
        this.userPassword.addEventListener('input', () => this.validateField(this.userPassword));
    }

    toggleMode() {
        this.isSignUpMode = !this.isSignUpMode;

        if (this.isSignUpMode) {
            this.showSignUpMode();
        } else {
            this.showLogInMode();
        }
    }

    showSignUpMode() {
        this.signUpInput.style.display = 'flex';
        this.formTitle.innerHTML = "Sign up";
        this.toggleButton.innerHTML = "Log in";
        this.registerBtn.value = "Sign up";
        this.forgetPasswordText.style.opacity = '0';
    }

    showLogInMode() {
        this.signUpInput.style.display = 'none';
        this.formTitle.innerHTML = "Log in";
        this.toggleButton.innerHTML = "Sign up";
        this.registerBtn.value = "Log in";
        this.forgetPasswordText.style.opacity = '1';
    }

    closeForm() {
        this.form.classList.remove('openForm');
    }

    toggleForm() {
        this.form.classList.toggle('openForm');
    }

    handleFormSubmit(e) {
        e.preventDefault(); // Prevent form from submitting automatically

        if (this.isSignUpMode) {
            // Registration check
            if (this.validateField(this.userName) && this.validateField(this.userEmail) && this.validateField(this.userPassword)) {
                // Encrypt the password before saving
                const encryptedPassword = encryptPassword(this.userPassword.value);

                // Save data on successful registration
                localStorage.setItem('currentUsername', this.userName.value);
                localStorage.setItem('currentEmail', this.userEmail.value);
                localStorage.setItem('currentPassword', encryptedPassword);
                localStorage.setItem("user-register", "True");

                this.resetFields();
                this.closeForm();
                this.updateUserProfile(); // Update user profile display
                alert("Registration successful.");
            } else {
                // Show error if fields are invalid
                this.validateField(this.userName);
                this.validateField(this.userEmail);
                this.validateField(this.userPassword);
            }
        } else {
            // Login check
            if (this.validateField(this.userName) && this.validateField(this.userPassword) && this.validateLogin(this.userName.value, this.userPassword.value)) {
                localStorage.setItem("user-register", "True");
                this.resetFields();
                this.closeForm(); // Close the form on successful login
                this.updateUserProfile(); // Update user profile display
                alert("Login successful.");
            } else {
                // Show error if login is unsuccessful
                this.validateField(this.userName);
                this.validateField(this.userPassword);
            }
        }
    }

    validateField(field) {
        let isValid = false;
        let errorMessage = ""; // Error message

        // Remove existing error messages if any
        this.removeErrorMessage(field);

        if (field === this.userName) {
            // Validate username (letters, numbers, at least 3 characters)
            const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
            isValid = usernameRegex.test(field.value.trim());
            if (!isValid) {
                errorMessage = "Username must be at least 3 characters long and contain only letters and numbers.";
            }
        } else if (field === this.userEmail) {
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(field.value.trim());
            if (!isValid) {
                errorMessage = "Please enter a valid email address.";
            }
        } else if (field === this.userPassword) {
            // Validate password (at least 8 characters, one uppercase, one lowercase letter, and one number)
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            isValid = passwordRegex.test(field.value.trim());
            if (!isValid) {
                errorMessage = "Password must be at least 8 characters long, contain one uppercase, one lowercase letter, and one number.";
            }
        }

        if (isValid) {
            field.classList.remove("not-fill");
            field.classList.add("fill-correct");
        } else {
            field.classList.remove("fill-correct");
            field.classList.add("not-fill");
            this.showErrorMessage(field, errorMessage); // Show error message
        }

        return isValid;
    }

    showErrorMessage(field, message) {
        // Create error message element
        const errorElement = document.createElement('span');
        errorElement.classList.add('error-message'); // Class for styling the error message
        errorElement.textContent = message;

        // Add message after the field
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    removeErrorMessage(field) {
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    validateLogin(username, password) {
        const storedUsername = localStorage.getItem('currentUsername');
        const storedEncryptedPassword = localStorage.getItem('currentPassword');

        // Decrypt the stored password
        const storedPassword = decryptPassword(storedEncryptedPassword);

        return username === storedUsername && password === storedPassword;
    }

    resetFields() {
        this.userName.value = "";
        this.userEmail.value = "";
        this.userPassword.value = "";

        this.userName.classList.remove("fill-correct", "not-fill");
        this.userEmail.classList.remove("fill-correct", "not-fill");
        this.userPassword.classList.remove("fill-correct", "not-fill");
    }

    // Function to update the user profile display after login or registration
    updateUserProfile() {
        const openFormBtn = document.getElementById('open-register-form');
        const userNameProfile = document.getElementById('userNameProfile');

        if (localStorage.getItem("user-register") !== null) {
            openFormBtn.style.display = 'none';
            userNameProfile.style.display = 'flex';
            userNameProfile.textContent = localStorage.getItem('currentUsername');
        }
    }

    // Function to check the user's status on page load
    checkUserStatus() {
        this.updateUserProfile();
    }
}

// Initialize RegisterForm on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = new RegisterForm(
        'register-type-text',    // ID of the toggle button
        '.register-form-box',    // Selector for the form
        'close-register',        // ID of the close button
        'sign-up-input',         // ID of the sign-up input field
        'register-form-title',   // ID of the form title
        'register-button',       // ID of the register button
        'forget-password-text'   // ID of the forget password text
    );

    // Initialize additional functionalities for opening the form
    document.getElementById('phone-user-icon').addEventListener('click', () => registerForm.toggleForm());
    document.getElementById('open-register-form').addEventListener('click', () => registerForm.toggleForm());
});