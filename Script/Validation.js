class InputField {
    constructor(element, errorElement, validator) {
        this.element = element;
        this.errorElement = errorElement;
        this.validator = validator;

        this.element.addEventListener('input', () => this.validate());
    }

    validate() {
        const value = this.element.value.trim();
        const errorMessage = this.validator(value);
        if (errorMessage) {
            this.errorElement.textContent = errorMessage;
            this.element.classList.add('invalid');
            return false;
        } else {
            this.errorElement.textContent = '';
            this.element.classList.remove('invalid');
            return true;
        }
    }
}

class FormValidator {
    constructor(formElement, fields) {
        this.formElement = formElement;
        this.fields = fields;

        const submitButton = formElement.querySelector('.submit');
        submitButton.addEventListener('click', (event) => this.handleSubmit(event));
    }

    handleSubmit(event) {
        let isValid = true;
        this.fields.forEach(field => {
            if (!field.validate()) {
                isValid = false;
            }
        });

        if (isValid) {
            alert('Form submitted successfully!');
            // Uncomment the next line if you want to actually submit the form
            // this.formElement.submit();
        } else {
            event.preventDefault();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const emailField = new InputField(
        document.querySelector('.email-input'),
        document.querySelector('.email-error'),
        (value) => {
            if (!value) return 'Email is required.';
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) return 'Invalid email format.';
            return '';
        }
    );

    const messageField = new InputField(
        document.querySelector('.message'),
        document.querySelector('.message-error'),
        (value) => {
            if (!value) return 'Message is required.';
            if (value.length < 10) return 'Message must be at least 10 characters.';
            return '';
        }
    );

    const formValidator = new FormValidator(document.getElementById('feedback-form'), [emailField, messageField]);
});
