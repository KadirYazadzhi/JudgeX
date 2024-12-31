class ButtonManager {
    constructor(buttonSelector, externalLanguageClass) {
        this.buttons = document.querySelectorAll(buttonSelector);
        this.externalLanguageClass = externalLanguageClass;  // Pass the instance of ExternalLanguageClass
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.onButtonClick(button));
        });
    }

    onButtonClick(clickedButton) {
        const isActive = clickedButton.classList.contains('hover-active');

        this.buttons.forEach(button => {
            button.classList.remove('hover-active');
            const tooltip = button.querySelector('.tooltiptext');
            if (tooltip) {
                tooltip.classList.remove('active');
            }
        });

        if (isActive) {
            localStorage.removeItem('selectedButton');
        } else {
            clickedButton.classList.add('hover-active');
            const tooltip = clickedButton.querySelector('.tooltiptext');
            if (tooltip) {
                tooltip.classList.add('active');
            }

            const buttonNumber = Array.from(this.buttons).indexOf(clickedButton) + 1;
            localStorage.setItem('selectedButton', buttonNumber);
        }

        // After the button is clicked, trigger the card click in ExternalLanguageClass
        const cardIndex = localStorage.getItem('selectedCardIndex');
        if (cardIndex !== null) {
            this.externalLanguageClass.triggerCardClick(cardIndex); // Trigger card click
        }
    }
}
