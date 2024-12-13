class FAQManager {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.faqs = this.container.querySelectorAll('.faq');
        this.addEventListeners();
    }

    addEventListeners() {
        this.faqs.forEach(faq => {
            faq.addEventListener('click', () => this.toggleFAQ(faq));
        });
    }

    toggleFAQ(selectedFaq) {
        const isActive = selectedFaq.classList.contains('active-faq');

        this.faqs.forEach(faq => {
            faq.classList.remove('active-faq');
            faq.nextElementSibling.style.maxHeight = null;
        });

        if (!isActive) {
            selectedFaq.classList.add('active-faq');
            const faqTextBox = selectedFaq.nextElementSibling;
            faqTextBox.style.maxHeight = faqTextBox.scrollHeight + 'px';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FAQManager('.faq-box');
});
