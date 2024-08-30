class CodeEditorManager {
    constructor() {
        this.codeEditor = document.getElementById('code-editor'); // Get the code editor element
        this.buttonToViewCode = document.getElementById('saveCode'); // Get the button element
        this.submitBtn = document.querySelector(".submit-btn"); // Get the submit button element
        this.taskCards = getTaskCard(); // Get all task cards

        // Initialize the current task and set up event listeners
        this.currentTask = getActiveTask(); // Initialize current task
        this.initializeEventListeners(); // Set up event listeners
    }

    // Generate a unique storage key for the given task
    generateStorageKey(task) {
        return `saveSubmitCode_${task}_${getSelectedLanguage()}_${getSelectedLevel()}`;
    }

    // Update the code editor with saved code for the given task
    updateCodeEditorWithSavedCode(task) {
        const savedCode = localStorage.getItem(this.generateStorageKey(task));
        this.codeEditor.value = savedCode ? savedCode : ""; // Set editor content or clear it
    }

    // Retrieve code for the specified task from localStorage
    getCodeForTask(task) {
        return localStorage.getItem(`codeEditorContent_${task}_${getSelectedLanguage()}_${getSelectedLevel()}`) || "";
    }

    // Set up event listeners for task cards and the button
    initializeEventListeners() {
        // Add click event listeners to all task cards
        this.taskCards.forEach(card => {
            card.addEventListener('click', () => {
                this.handleTaskCardClick();
            });
        });

        // Add click event listener to the button
        this.buttonToViewCode.addEventListener('click', () => {
            this.handleButtonClick();
        });
    }

    // Handle click event on task cards
    handleTaskCardClick() {
        const newTask = getActiveTask(); // Get the currently active task

        // If the task has changed
        if (newTask !== this.currentTask) {
            this.buttonToViewCode.classList.remove("active-icon"); // Deactivate the button
            this.currentTask = newTask; // Update the current task
            this.codeEditor.value = this.getCodeForTask(this.currentTask); // Update the editor with code for the new task
        }
    }

    // Handle click event on the button
    handleButtonClick() {
        if (this.buttonToViewCode.classList.contains("active-icon")) {
            // If the button is active, deactivate it and show code for the current task
            this.buttonToViewCode.classList.remove("active-icon");
            this.codeEditor.value = this.getCodeForTask(this.currentTask);
            this.submitBtn.classList.remove("not-allowed");
        } else {
            // If the button is not active, activate it and update editor with saved code
            this.updateCodeEditorWithSavedCode(this.currentTask);
            this.buttonToViewCode.classList.add("active-icon");
            this.submitBtn.classList.add("not-allowed"); // Add the class not-allowed to prevent users from submitting previously saved code.
        }
    }
}

// Initialize the CodeEditorManager class when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CodeEditorManager();
});

