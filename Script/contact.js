class ContactForm {
    constructor(openButtonId, formId, closeButtonId) {
        this.buttonOpen = document.getElementById(openButtonId);
        this.buttonClose = document.getElementById(closeButtonId);
        this.form = document.getElementById(formId);

        this.buttonOpen.addEventListener('click', () => this.toggleForm());
        this.buttonClose.addEventListener('click', () => this.closeForm());
    }

    toggleForm() {
        this.form.style.bottom = '0%';
    }

    closeForm() {
        this.form.style.bottom = '-100%';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        new ContactForm('contact-button', 'contact-section', 'exit');
    }
    else {
        new ContactForm('contact-button', 'phone-contact-form', 'exit-phone');
    }
});