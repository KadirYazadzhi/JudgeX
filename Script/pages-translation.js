document.addEventListener('DOMContentLoaded', function () {

    // Language Selector class to encapsulate all related functionality
    class LanguageSelector {
        constructor(selectorElement, dropdownElement, selectedLabelElement, languageOptionsElement, flagImageElement) {
            this.selectorElement = selectorElement;
            this.dropdownElement = dropdownElement;
            this.selectedLabelElement = selectedLabelElement;
            this.languageOptionsElement = languageOptionsElement;
            this.flagImageElement = flagImageElement;

            // Bind event listeners
            this.addEventListeners();
        }

        // Initialize event listeners for the language selector
        addEventListeners() {
            // Toggle dropdown when language selector is clicked
            this.selectorElement.addEventListener('click', (event) => this.toggleDropdown(event));

            // Update the language when an option is selected from the dropdown
            this.dropdownElement.addEventListener('click', (event) => this.selectLanguage(event));

            // Close dropdown if clicked outside
            document.addEventListener('click', (event) => this.closeDropdownOnOutsideClick(event));
        }

        // Toggle the dropdown menu visibility
        toggleDropdown(event) {
            event.stopPropagation(); // Prevent immediate closure
            this.dropdownElement.classList.toggle('hiddenLanguage');
        }

        // Select a language option and update the UI
        selectLanguage(event) {
            const selectedOption = event.target.closest('.language-option');
            if (selectedOption) {
                const previousLang = this.selectedLabelElement.textContent;

                // Swap the current and selected language
                this.selectedLabelElement.textContent = selectedOption.textContent;
                this.languageOptionsElement.textContent = previousLang;

                // Update the flag based on the selected language
                this.updateFlag(this.selectedLabelElement.textContent);

                // Hide the dropdown after selection
                this.dropdownElement.classList.remove('hiddenLanguage');
            }
        }

        // Update the language flag based on the selected language
        updateFlag(selectedLanguage) {
            if (selectedLanguage === "English") {
                this.flagImageElement.src = 'Image/english-flag.svg';
            } else {
                this.flagImageElement.src = 'Image/bulgarian-flag.svg';
            }
        }

        // Close the dropdown if clicked outside the language selector
        closeDropdownOnOutsideClick(event) {
            if (!this.selectorElement.contains(event.target)) {
                this.dropdownElement.classList.add('hiddenLanguage');
            }
        }
    }

    // Instantiate the LanguageSelector with the relevant DOM elements
    const languageSelectorInstance = new LanguageSelector(
        document.querySelector('.language-selector'),
        document.querySelector('.language-dropdown'),
        document.querySelector('.selected-language'),
        document.querySelector('.language-option'),
        document.getElementById('language-img')
    );
});
