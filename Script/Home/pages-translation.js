document.addEventListener('DOMContentLoaded', function () {

    // Language Selector class to encapsulate all related functionality
    class LanguageSelector {
        constructor(selectorElement, dropdownElement, selectedLabelElement, languageOptionsElement, flagImageElement) {
            this.selectorElement = selectorElement;
            this.dropdownElement = dropdownElement;
            this.selectedLabelElement = selectedLabelElement;
            this.languageOptionsElement = languageOptionsElement;
            this.flagImageElement = flagImageElement;

            // Initialize by setting the language from local storage
            this.initializeLanguage();

            // Bind event listeners
            this.addEventListeners();
        }

        // Initialize language based on local storage
        initializeLanguage() {
            const storedLanguage = localStorage.getItem('pages_active_language');
            if (storedLanguage) {
                this.updateUIBasedOnLanguage(storedLanguage);
            } else {
                // Default language if nothing is stored
                this.updateUIBasedOnLanguage('EN');
            }
        }

        // Update UI elements based on selected language
        updateUIBasedOnLanguage(languageCode) {
            if (languageCode === 'EN') {
                this.selectedLabelElement.textContent = 'English';
                this.languageOptionsElement.textContent = 'Български'; // The option in the dropdown becomes the other language
                this.flagImageElement.src = 'Image/english-flag.svg';
            } else {
                this.selectedLabelElement.textContent = 'Български';
                this.languageOptionsElement.textContent = 'English';
                this.flagImageElement.src = 'Image/bulgarian-flag.svg';
            }
            // Update local storage with the current language
            localStorage.setItem('pages_active_language', languageCode);
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
                // Determine the selected language and update UI accordingly
                const newLanguage = selectedOption.textContent === 'English' ? 'EN' : 'BG';
                this.updateUIBasedOnLanguage(newLanguage);

                // Hide the dropdown after selection
                this.dropdownElement.classList.remove('hiddenLanguage');
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
