class RegisterForm {
    constructor(toggleButtonId, formSelector, closeButtonId, signUpInputId, formTitleId, registerBtnId, forgetPasswordTextId) {
        this.toggleButton = document.getElementById(toggleButtonId);
        this.form = document.querySelector(formSelector);
        this.closeButton = document.getElementById(closeButtonId);
        this.signUpInput = document.getElementById(signUpInputId);
        this.formTitle = document.getElementById(formTitleId);
        this.registerBtn = document.getElementById(registerBtnId);
        this.forgetPasswordText = document.getElementById(forgetPasswordTextId);

        this.isSignUpMode = false;

        // Елементи за валидация
        this.userName = document.getElementById('username');
        this.userEmail = document.getElementById('userEmail');
        this.userPassword = document.getElementById('password');

        this.init();
    }

    init() {
        this.toggleButton.addEventListener('click', () => this.toggleMode());
        this.closeButton.addEventListener('click', () => this.closeForm());
        this.registerBtn.addEventListener('click', (e) => this.handleFormSubmit(e));

        // Добавяне на събития при промяна на стойността на полетата (динамична валидация)
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
        e.preventDefault(); // предотвратяване на автоматичното изпращане на формата

        if (this.isSignUpMode) {
            // Проверка за регистрация
            if (this.validateField(this.userName) && this.validateField(this.userEmail) && this.validateField(this.userPassword)) {
                // Запази данни при успешна регистрация
                localStorage.setItem('currentUsername', this.userName.value);
                localStorage.setItem('currentEmail', this.userEmail.value);
                localStorage.setItem('currentPassword', this.userPassword.value);
                localStorage.setItem("user-register", "True");

                this.resetFields();
                this.closeForm();
                alert("Registration successful.");
            } else {
                // Покажи грешка, ако има невалидни полета
                this.validateField(this.userName);
                this.validateField(this.userEmail);
                this.validateField(this.userPassword);
            }
        } else {
            // Проверка за вход
            if (this.validateField(this.userName) && this.validateField(this.userPassword) && this.validateLogin(this.userName.value, this.userPassword.value)) {
                localStorage.setItem("user-register", "True");
                this.resetFields();
                this.closeForm(); // Затваряне на формата след успешен вход
                alert("Login successful.");
            } else {
                // Покажи грешка, ако е неуспешно
                this.validateField(this.userName);
                this.validateField(this.userPassword);
            }
        }
    }

    validateField(field) {
        let isValid = false;
        let errorMessage = ""; // Съобщение за грешка

        // Премахни съществуващите съобщения за грешка, ако има
        this.removeErrorMessage(field);

        if (field === this.userName) {
            // Валидация на потребителско име (букви, цифри, дължина поне 3 символа)
            const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
            isValid = usernameRegex.test(field.value.trim());
            if (!isValid) {
                errorMessage = "Username must be at least 3 characters long and contain only letters and numbers.";
            }
        } else if (field === this.userEmail) {
            // Валидация на имейл
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(field.value.trim());
            if (!isValid) {
                errorMessage = "Please enter a valid email address.";
            }
        } else if (field === this.userPassword) {
            // Валидация на парола (поне 8 символа, поне една главна буква, една малка буква и една цифра)
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
            this.showErrorMessage(field, errorMessage); // Покажи съобщение за грешка
        }

        return isValid;
    }

    showErrorMessage(field, message) {
        // Създай елемент за съобщение за грешка
        const errorElement = document.createElement('span');
        errorElement.classList.add('error-message'); // Клас за стилизиране на съобщението
        errorElement.textContent = message;

        // Добави съобщението след полето
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
        const storedPassword = localStorage.getItem('currentPassword');

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
}

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = new RegisterForm(
        'register-type-text',    // ID на бутона за превключване
        '.register-form-box',    // Селектор на формата
        'close-register',        // ID на бутона за затваряне
        'sign-up-input',         // ID на полето за вход за регистрация
        'register-form-title',   // ID на заглавието на формата
        'register-button',       // ID на бутона за изпращане на формата
        'forget-password-text'   // ID на текста за забравена парола
    );

    // Инициализация на допълнителни функционалности за отваряне на формата
    document.getElementById('phone-user-icon').addEventListener('click', () => registerForm.toggleForm());
    document.getElementById('open-register-form').addEventListener('click', () => registerForm.toggleForm());
});
