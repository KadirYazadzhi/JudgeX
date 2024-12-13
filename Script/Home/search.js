class SearchForm {
    constructor(iconId, formId) {
        this.icon = document.getElementById(iconId);
        this.form = document.getElementById(formId);

        this.icon.addEventListener('click', () => this.toggleForm());
    }

    toggleForm() {
        if (this.form.style.top === '30%') {
            this.form.style.top = '-100%';
        } else {
            this.form.style.top = '30%';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SearchForm('search-icon-phone', 'search-box');
});