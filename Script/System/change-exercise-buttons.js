class TaskManager {
    constructor() {
        // Retrieve task card elements, assume getTaskCard() fetches them
        this.taskCards = getTaskCard();

        // Determine whether the user is on a phone or a computer and adjust the UI elements accordingly
        if (window.innerWidth < 768) {
            // Select elements for mobile UI
            this.barStopper = document.getElementById('bar-stopper-phone');
            this.barText = document.getElementById('difficult-text-phone');
        } else {
            // Select elements for desktop UI
            this.barStopper = document.getElementById('bar-stopper-computer');
            this.barText = document.getElementById('difficult-text-computer');
        }

        // Data mapping for different difficulty levels (1-4)
        this.dataValueForButton = {
            1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 19],
            2: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 47],
            3: [48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 69, 70, 72, 73],
            4: [75, 77, 79, 81, 83, 85, 87, 89, 91, 93],
            5: [94, 95, 96, 97, 98]
        };

        // Retrieve the currently selected level from an external function or source
        this.selectedButton = parseInt(selectedLevel, 10) || 1; // Fallback to level 1 if selectedLevel is undefined or NaN
    }

    // Initializes the task manager by setting up card values, UI elements, and event listeners
    initialize() {
        this.updateTaskCardValues();  // Update the data-value attributes for task cards
        this.updateDifficultyLevel(); // Update the difficulty level UI based on the selected level
        this.activateCard(this.taskCards[0]); // Activate the first task card by default
        this.addEventListeners();  // Add event listeners to task cards
    }

    // Updates the data-value of each task card according to the selected difficulty level
    updateTaskCardValues() {
        const values = this.dataValueForButton[this.selectedButton]; // Retrieve data values based on the selected difficulty level
        if (values) {
            this.taskCards.forEach((card, index) => {
                card.setAttribute('data-value', values[index]); // Set data-value attribute for each task card
            });
        }
    }

    // Updates the text and color of the difficulty level indicator (e.g., "Medium", "Hard") based on the selected level
    updateDifficultyLevel() {
        // Map to associate selected level with text and color for the difficulty bar
        const difficultyMap = {
            2: { text: "Medium", color: "#FFDD00FF" },
            3: { text: "Hard", color: "#FF7300FF" },
            4: { text: "Insane", color: "#DC0505FF" },
            5: { text: "Special", color: "#fcc200" },
        };

        // Get the difficulty settings for the selected level
        const difficulty = difficultyMap[this.selectedButton];

        // Update the UI if there is a matching difficulty setting
        if (difficulty) {
            this.barText.innerHTML = difficulty.text; // Update difficulty text
            this.barText.style.color = difficulty.color; // Update difficulty color
        }
    }

    // Activates a task card by highlighting it and updating the progress bar
    activateCard(card) {
        // Remove the active class from all task cards
        this.taskCards.forEach(c => c.classList.remove('active-task'));

        if (parseInt(getSelectedLevel()) === 5) {
            this.barStopper.style.marginLeft = `95%`;
            this.barText.style.marginLeft = `86%`;
        }
        else {
            // Retrieve the task value from the data attribute and update the bar position
            const taskValue = parseInt(card.dataset.value);
            this.barStopper.style.marginLeft = `${taskValue + 1}%`; // Adjust the bar stopper's position

            // Adjust the margin of the difficulty text based on task progress
            if (taskValue > 85) {
                this.barText.style.marginLeft = `${taskValue - 5}%`;
            } else {
                this.barText.style.marginLeft = `${taskValue - 1}%`;
            }
        }

        // Add the active class to the clicked task card
        card.classList.add('active-task');
    }

    // Adds click event listeners to each task card to trigger the card activation
    addEventListeners() {
        // Add event listeners to each task card to activate it when clicked
        this.taskCards.forEach(card => {
            card.addEventListener('click', () => {
                this.activateCard(card); // Activate the clicked card
                createSubmissionTable();
            });
        });
    }
}

// Initialize TaskManager when DOM content has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager(); // Create an instance of TaskManager
    taskManager.initialize(); // Initialize the task manager
});
