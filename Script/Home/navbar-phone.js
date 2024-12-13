class MenuToggle {
    constructor(buttonId, menuClass) {
        this.button = document.getElementById(buttonId);
        this.menu = document.querySelector(menuClass);
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        this.menu.classList.toggle('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MenuToggle('open-nav-for-phone', '.menu-nav-phone');
});
