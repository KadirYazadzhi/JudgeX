class TaskManager {
    constructor() {
        this.taskCards = getTaskCard();
        this.barStopper = document.querySelector('.bar-stopper');
        this.barText = document.querySelector('.difficult-text');
        this.dataValueForButton = {
            1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 19],
            2: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 47],
            3: [48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 69, 70, 72, 73],
            4: [75, 77, 79, 81, 83, 85, 87, 89, 91, 93]
        };
        this.selectedButton = parseInt(selectedLevel, 10) || 1;
    }

    initialize() {
        this.updateTaskCardValues();
        this.updateDifficultyLevel();
        this.activateCard(this.taskCards[0]);
        this.addEventListeners();
    }

    updateTaskCardValues() {
        const values = this.dataValueForButton[this.selectedButton];
        if (values) {
            this.taskCards.forEach((card, index) => {
                card.setAttribute('data-value', values[index]);
            });
        }
    }

    updateDifficultyLevel() {
        const difficultyMap = {
            2: { text: "Medium", color: "#FFDD00FF" },
            3: { text: "Hard", color: "#FF7300FF" },
            4: { text: "Insane", color: "#DC0505FF" }
        };

        const difficulty = difficultyMap[this.selectedButton];
        if (difficulty) {
            this.barText.innerHTML = difficulty.text;
            this.barText.style.color = difficulty.color;
        }
    }

    activateCard(card) {
        this.taskCards.forEach(c => c.classList.remove('active-task'));
        const taskValue = parseInt(card.dataset.value);
        this.barStopper.style.marginLeft = `${taskValue + 1}%`;

        if (taskValue > 85) {
            this.barText.style.marginLeft = `${taskValue - 5}%`;
        } else {
            this.barText.style.marginLeft = `${taskValue - 1}%`;
        }

        card.classList.add('active-task');
    }

    addEventListeners() {
        this.taskCards.forEach(card => {
            card.addEventListener('click', () => {
                this.activateCard(card);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    taskManager.initialize();
});


