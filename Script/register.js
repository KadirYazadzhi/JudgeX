class RegisterToggle {
    constructor(buttonId, menuClass) {
        this.button = document.getElementById(buttonId);
        this.form = document.querySelector(menuClass);
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        this.form.classList.toggle('openForm');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RegisterToggle('phone-user-icon', '.register-form-box');
});
