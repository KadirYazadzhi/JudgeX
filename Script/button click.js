class ButtonManager {
    constructor(buttonSelector) {
        this.buttons = document.querySelectorAll(buttonSelector);
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.onButtonClick(button));
        });
    }

    onButtonClick(clickedButton) {

        this.buttons.forEach(button => {
            button.classList.remove('hover-active');
            const tooltip = button.querySelector('.tooltiptext');
            if (tooltip) {
                tooltip.classList.remove('active');
            }
        });

        clickedButton.classList.add('hover-active');
        const tooltip = clickedButton.querySelector('.tooltiptext');
        if (tooltip) {
            tooltip.classList.add('active');
        }


        const buttonNumber = Array.from(this.buttons).indexOf(clickedButton) + 1;
        localStorage.setItem('selectedButton', buttonNumber);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonManager = new ButtonManager('.button');

    const selectedButtonNumber = localStorage.getItem('selectedButton');
    if (selectedButtonNumber) {
        const selectedButton = document.querySelectorAll('.button')[selectedButtonNumber - 1];
        if (selectedButton) {
            selectedButton.click();
        }
    }
});
