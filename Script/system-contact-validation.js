document.addEventListener('DOMContentLoaded', function () {
    class Validator {
        static validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailPattern.test(email);
        }

        static validateMessage(message) {
            return typeof message === "string" && message.trim().length > 10;
        }

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

    class Trim {
        static processEmail(email) {
            const [localPart] = email.split('@');
            return localPart.replace(/\d+/g, '');
        }
    }

    class ContactForm {
        constructor() {
            this.form = document.querySelector('.contact-form');
            this.emailInput = document.querySelector('.email-input');
            this.messageInput = document.querySelector('.contact-form-message');
            this.messageBtn = document.querySelector('.message-icon');
            this.contactBackground = document.getElementById('contact-background');

            emailjs.init('VT_BpXFAeAX8JEnDx'); // Replace with your actual user ID from EmailJS

            this.addEventListeners();
        }

        addEventListeners() {
            // Event listeners for email and message validation
            this.emailInput.addEventListener('input', () => {
                const isEmailValid = Validator.validateEmail(this.emailInput.value);
                Validator.validateField(this.emailInput, isEmailValid);
            });

            this.messageInput.addEventListener('input', () => {
                const isMessageValid = Validator.validateMessage(this.messageInput.value);
                Validator.validateField(this.messageInput, isMessageValid);
            });

            this.form.addEventListener('submit', async (event) => {
                event.preventDefault(); // Prevent form submission

                const isEmailValid = Validator.validateEmail(this.emailInput.value);
                const isMessageValid = Validator.validateMessage(this.messageInput.value);

                Validator.validateField(this.emailInput, isEmailValid);
                Validator.validateField(this.messageInput, isMessageValid);

                if (isEmailValid && isMessageValid) {
                    await this.sendEmail();
                } else {
                    alert('Please correct the highlighted fields.');
                }
            });

            this.messageBtn.addEventListener('click', () => {
                if (this.contactBackground.classList.contains('hidden')) {
                    this.contactBackground.classList.remove('hidden');
                }
                else {
                    this.contactBackground.classList.add('hidden');
                }
            });
        }

        async sendEmail() {
            try {
                const formData = {
                    userEmail: this.emailInput.value,
                    userMessage: this.messageInput.value,
                    userName: Trim.processEmail(this.emailInput.value)
                };

                const response = await emailjs.send('service_efs6rd2', 'template_cjtw2jd', formData);

                if (response.status === 200) {
                    alert('Form submitted successfully!');
                    this.emailInput.value = '';
                    this.messageInput.value = '';
                } else {
                    alert('Failed to submit form. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending the form. Please try again.');
            }
        }
    }

    new ContactForm();
});

