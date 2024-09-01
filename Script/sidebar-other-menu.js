document.addEventListener('DOMContentLoaded', function () {
    // Define the ToggleVisibility class
    class ToggleVisibility {
        constructor(buttonSelector, targetSelector) {
            // Select the button and the target element
            this.button = document.querySelector(buttonSelector);
            this.target = document.querySelector(targetSelector);

            // Check if elements exist
            if (!this.button || !this.target) {
                console.error('Button or target element not found.');
                return;
            }

            // Add event listener for the button
            this.addEventListeners();
        }

        // Method to add event listeners to the button
        addEventListeners() {
            this.button.addEventListener('click', () => this.toggleVisibility());
        }

        // Method to toggle visibility of the target element
        toggleVisibility() {
            if (this.target.classList.contains('hidden')) {
                this.target.classList.remove('hidden');
            } else {
                this.target.classList.add('hidden');
            }
        }
    }

    // Create an instance of ToggleVisibility with appropriate selectors
    new ToggleVisibility('.time', '.background-time');
});
