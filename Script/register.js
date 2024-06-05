class RegisterToggle {
    constructor(buttonId, menuSelector, closeButtonId) {
        this.button = document.getElementById(buttonId);
        this.form = document.querySelector(menuSelector);
        this.close = document.getElementById(closeButtonId);
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.toggleMenu());
        this.close.addEventListener('click', () => this.closeElement());

    }

    toggleMenu() {
        this.form.classList.toggle('openForm');
    }

    closeElement() {
        this.form.classList.remove('openForm');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RegisterToggle('phone-user-icon', '.register-form-box', 'close-register');
});
