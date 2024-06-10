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
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ButtonManager('.button');
});

