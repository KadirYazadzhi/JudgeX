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

        this.init();
    }

    init() {
        this.toggleButton.addEventListener('click', () => this.toggleMode());
        this.closeButton.addEventListener('click', () => this.closeForm());
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
}

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = new RegisterForm(
        'register-type-text',    // ID на бутона за превключване
        '.register-form-box',    // Селектор на формата
        'close-register',        // ID на бутона за затваряне
        'sign-up-input',         // ID на полето за вход за регистра
        'register-form-title',   // ID на заглавието на формата
        'register-button',       // ID на бутона за изпращане на формата
        'forget-password-text'   // ID на текста за забравена парола
    );

    // Инициализация на допълнителни функционалности за отваряне на формата
    document.getElementById('phone-user-icon').addEventListener('click', () => registerForm.toggleForm());
    document.getElementById('open-register-form').addEventListener('click', () => registerForm.toggleForm());
});