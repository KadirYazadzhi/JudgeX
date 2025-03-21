document.addEventListener('DOMContentLoaded', function () {

    class LanguageSelector {
        constructor(selectorElement, dropdownElement, selectedLabelElement, languageOptionsElement, flagImageElement) {
            this.selectorElement = selectorElement;
            this.dropdownElement = dropdownElement;
            this.selectedLabelElement = selectedLabelElement;
            this.languageOptionsElement = languageOptionsElement;
            this.flagImageElement = flagImageElement;

            this.initializeLanguage();
            this.addEventListeners();
        }

        initializeLanguage() {
            const storedLanguage = localStorage.getItem('pages_active_language');
            if (storedLanguage) {
                this.updateUIBasedOnLanguage(storedLanguage);
            } else {
                this.updateUIBasedOnLanguage('EN');
            }
        }

        updateUIBasedOnLanguage(languageCode) {
            if (languageCode === 'EN') {
                this.selectedLabelElement.textContent = 'English';
                this.languageOptionsElement.textContent = 'Български';
                this.flagImageElement.src = 'Image/english-flag.svg';

                // Disable the Bulgarian language option
                this.languageOptionsElement.classList.add('disabled-language');
                this.languageOptionsElement.setAttribute('data-tooltip', 'Bulgarian is not available.');
            } else {
                this.selectedLabelElement.textContent = 'Български';
                this.languageOptionsElement.textContent = 'English';
                this.flagImageElement.src = 'Image/bulgarian-flag.svg';
            }
            localStorage.setItem('pages_active_language', languageCode);
        }

        addEventListeners() {
            this.selectorElement.addEventListener('click', (event) => this.toggleDropdown(event));
            this.dropdownElement.addEventListener('click', (event) => this.selectLanguage(event));
            document.addEventListener('click', (event) => this.closeDropdownOnOutsideClick(event));

            // Show tooltip on hover if the language is disabled
            this.languageOptionsElement.addEventListener('mouseenter', () => {
                if (this.languageOptionsElement.classList.contains('disabled-language')) {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'tooltip-bg';
                    tooltip.textContent = this.languageOptionsElement.getAttribute('data-tooltip');
                    document.body.appendChild(tooltip);

                    const rect = this.languageOptionsElement.getBoundingClientRect();
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                    tooltip.style.top = `${rect.bottom + window.scrollY}px`;

                    this.languageOptionsElement.tooltipElement = tooltip;
                }
            });

            this.languageOptionsElement.addEventListener('mouseleave', () => {
                if (this.languageOptionsElement.tooltipElement) {
                    document.body.removeChild(this.languageOptionsElement.tooltipElement);
                    this.languageOptionsElement.tooltipElement = null;
                }
            });
        }

        toggleDropdown(event) {
            event.stopPropagation();
            this.dropdownElement.classList.toggle('hiddenLanguage');
        }

        selectLanguage(event) {
            const selectedOption = event.target.closest('.language-option');
            if (selectedOption && !selectedOption.classList.contains('disabled-language')) {
                const newLanguage = selectedOption.textContent === 'English' ? 'EN' : 'BG';
                this.updateUIBasedOnLanguage(newLanguage);
                this.dropdownElement.classList.remove('hiddenLanguage');
            }
        }

        closeDropdownOnOutsideClick(event) {
            if (!this.selectorElement.contains(event.target)) {
                this.dropdownElement.classList.add('hiddenLanguage');
            }
        }
    }

    const languageSelectorInstance = new LanguageSelector(
        document.querySelector('.language-selector'),
        document.querySelector('.language-dropdown'),
        document.querySelector('.selected-language'),
        document.querySelector('.language-option'),
        document.getElementById('language-img')
    );
});

/* CSS */
const style = document.createElement('style');
style.innerHTML = `
    .disabled-language {
        cursor: not-allowed!important;
        opacity: 0.5;
    }
    .tooltip-bg {
        position: absolute;
        background: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
        font-size: 12px;
    }
`;
document.head.appendChild(style);
