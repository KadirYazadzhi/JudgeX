document.addEventListener('DOMContentLoaded', function () {
    // Validator class to handle validation of email and message
    class Validator {
        // Static method to validate email using regex
        static validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailPattern.test(email);
        }

        // Static method to validate message (must be a string and longer than 10 characters)
        static validateMessage(message) {
            return typeof message === "string" && message.trim().length > 10;
        }

        // Static method to apply validation classes to the input fields
        static validateField(input, isValid) {
            if (isValid) {
                input.classList.remove('invalidData');
                input.classList.add('validData');
                input.style.outline = 'none';
            } else {
                input.classList.remove('validData');
                input.classList.add('invalidData');
                input.style.outline = 'none';
            }
        }
    }

    // Trim class to process email by removing digits from the local part
    class Trim {
        static processEmail(email) {
            const [localPart] = email.split('@');
            return localPart.replace(/\d+/g, '');
        }
    }

    // ContactForm class to handle form operations and interactions
    class ContactForm {
        constructor() {
            // Select form and input elements
            this.form = document.querySelector('.contact-form');
            this.emailInput = document.querySelector('.email-input');
            this.messageInput = document.querySelector('.contact-form-message');
            this.messageBtn = document.querySelector('.message-icon');
            this.contactBackground = document.getElementById('contact-background');

            // Initialize EmailJS with user ID
            emailjs.init('VT_BpXFAeAX8JEnDx'); // Replace with your actual user ID from EmailJS

            // Add event listeners for form interactions
            this.addEventListeners();
        }

        // Method to add event listeners to form and buttons
        addEventListeners() {
            // Event listener for email input validation
            this.emailInput.addEventListener('input', () => {
                const isEmailValid = Validator.validateEmail(this.emailInput.value);
                Validator.validateField(this.emailInput, isEmailValid);
            });

            // Event listener for message input validation
            this.messageInput.addEventListener('input', () => {
                const isMessageValid = Validator.validateMessage(this.messageInput.value);
                Validator.validateField(this.messageInput, isMessageValid);
            });

            // Event listener for form submission
            this.form.addEventListener('submit', async (event) => {
                event.preventDefault(); // Prevent default form submission

                // Validate email and message
                const isEmailValid = Validator.validateEmail(this.emailInput.value);
                const isMessageValid = Validator.validateMessage(this.messageInput.value);

                // Apply validation styles
                Validator.validateField(this.emailInput, isEmailValid);
                Validator.validateField(this.messageInput, isMessageValid);

                // If both fields are valid, send the email
                if (isEmailValid && isMessageValid) {
                    await this.sendEmail();
                } else {
                    alert('Please correct the highlighted fields.');
                }
            });

            // Event listener for time button to toggle visibility of the time card background
            this.messageBtn.addEventListener('click', () => {
                this.toggleVisibility(this.contactBackground);
            });
        }

        // Method to toggle the visibility of an element
        toggleVisibility(element) {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        }

        // Method to send an email using EmailJS
        async sendEmail() {
            try {
                // Prepare form data
                const formData = {
                    userEmail: this.emailInput.value,
                    userMessage: this.messageInput.value,
                    userName: Trim.processEmail(this.emailInput.value)
                };

                // Send email using EmailJS
                const response = await emailjs.send('service_efs6rd2', 'template_cjtw2jd', formData);

                // Check response status and provide feedback
                if (response.status === 200) {
                    alert('Form submitted successfully!');
                    this.emailInput.value = ''; // Clear email input
                    this.messageInput.value = ''; // Clear message input

                    // Optionally, toggle visibility of the contact background after successful submission
                    this.toggleVisibility(this.contactBackground);
                } else {
                    alert('Failed to submit form. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending the form. Please try again.');
            }
        }
    }

    // Instantiate ContactForm class to initialize form functionality
    new ContactForm();
});


