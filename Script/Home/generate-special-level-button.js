// Define a class to handle the creation of the special button
class SpecialButton {
    // Constructor to initialize the button with the tooltip text
    constructor(tooltipText, buttonsBox) {
        this.tooltipText = tooltipText; // Store the tooltip text
        this.butttonsBox = document.querySelector(buttonsBox);
        this.buttonDiv = null; // To store the button element
        this.tooltipDiv = null; // To store the tooltip element
    }

    // Method to create the main button element
    createButton() {
        this.buttonDiv = document.createElement('div');
        this.buttonDiv.classList.add('button', 'special-design');
    }

    // Method to create the tooltip container
    createTooltip() {
        this.tooltipDiv = document.createElement('div');
        this.tooltipDiv.classList.add('tooltip');
    }

    // Method to create the tooltip text
    createTooltipText() {
        const tooltipTextDiv = document.createElement('div');
        tooltipTextDiv.classList.add('tooltiptext', 'special-btn');
        tooltipTextDiv.textContent = this.tooltipText; // Set the tooltip text passed to the constructor
        this.tooltipDiv.appendChild(tooltipTextDiv); // Append the tooltip text to the tooltip container
    }

    // Method to create the stars
    createStars() {
        for (let i = 0; i < 4; i++) {
            const starSpan = document.createElement('span');
            starSpan.classList.add('fa', 'fa-star');
            this.tooltipDiv.appendChild(starSpan); // Add stars to the tooltip container
        }
    }

    // Method to create the label
    createLabel() {
        const label = document.createElement('label');
        label.textContent = 'Special';
        this.tooltipDiv.appendChild(label); // Add the label to the tooltip container
    }

    // Method to assemble the entire button and tooltip structure
    assembleButton() {
        this.createButton(); // Create the main button container
        this.createTooltip(); // Create the tooltip container
        this.createTooltipText(); // Create the tooltip text
        this.createStars(); // Add the stars
        this.createLabel(); // Add the label
        this.buttonDiv.appendChild(this.tooltipDiv); // Append the tooltip to the button
        this.butttonsBox.appendChild(this.buttonDiv);
    }

}

if (getSpecialUser()) {
    // Create a new SpecialButton instance with the desired tooltip text
    const specialButton = new SpecialButton('This level offers the most challenging and complex tasks, providing an exciting experience exclusively for users who have purchased a premium plan.', ".buttons-box");

    // Assemble the button and tooltip
    specialButton.assembleButton();
}


