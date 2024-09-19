// Define a class for managing progress and charts
class ProgressManager {
    constructor() {
        // Initialize the excluded indices and query all cards
        this.excludedIndices = [11, 13, 15, 17, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 71, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92];
        this.cards = document.querySelectorAll(".language-card-modal");
        this.init();
    }

    // Initialize event listeners and default settings
    init() {
        // Set the first card as active if none is active
        const activeCard = document.querySelector(".activeLanguageCard");
        if (!activeCard && this.cards.length > 0) {
            this.setActiveCard(this.cards[0]);
        }

        // Add click event listeners to each card
        this.cards.forEach(card => {
            card.addEventListener("click", () => this.setActiveCard(card));
        });
    }

    // Set the active card and update progress
    setActiveCard(card) {
        // Remove 'activeLanguageCard' class from all cards
        this.cards.forEach(c => c.classList.remove("activeLanguageCard"));
        // Add 'activeLanguageCard' class to the clicked card
        card.classList.add("activeLanguageCard");

        // Get the language ID from the card
        const languageId = card.getAttribute('data-card-id');

        // Update progress for each difficulty level
        const easyProgress = this.calculateProgress(languageId, 1);  // Easy
        const mediumProgress = this.calculateProgress(languageId, 2);  // Medium
        const hardProgress = this.calculateProgress(languageId, 3);  // Hard
        const insaneProgress = this.calculateProgress(languageId, 4);  // Insane

        // Update progress bars and chart
        this.updateProgress('easy', easyProgress.percent, easyProgress.completed, easyProgress.total);
        this.updateProgress('medium', mediumProgress.percent, mediumProgress.completed, mediumProgress.total);
        this.updateProgress('hard', hardProgress.percent, hardProgress.completed, hardProgress.total);
        this.updateProgress('insane', insaneProgress.percent, insaneProgress.completed, insaneProgress.total);

        // Calculate and update total progress
        const totalPercent = (easyProgress.completed + mediumProgress.completed + hardProgress.completed + insaneProgress.completed) / 55 * 100;
        this.updateChart(totalPercent);
    }

    // Calculate progress based on localStorage data
    calculateProgress(languageId, difficulty) {
        let completedTasks = 0;
        let totalTasks = 15;
        let startPoint = 1;
        let endPoint = 0;

        switch (difficulty) {
            case 1:
                endPoint = 19;
                break;
            case 2:
                startPoint = 20;
                endPoint = 47;
                break;
            case 3:
                startPoint = 48;
                endPoint = 73;
                break;
            case 4:
                startPoint = 75;
                endPoint = 93;
                totalTasks = 10;
                break;
        }

        // Iterate over all tasks and count completed ones
        for (let task = startPoint; task <= endPoint; task++) {
            if (!this.excludedIndices.includes(task)) {
                const taskKey = `taskResult_${task}_${languageId}_${difficulty}`;
                const taskValue = localStorage.getItem(taskKey);

                if (taskValue) {
                    completedTasks++;
                }
            }
        }

        // Calculate percentage of completed tasks
        const percent = (completedTasks / totalTasks) * 100;

        return {
            percent: percent.toFixed(2),
            completed: completedTasks,
            total: totalTasks
        };
    }

    // Update the progress bar for a specific difficulty level
    updateProgress(level, percent, completed, total) {
        const progressBarDot = document.querySelector(`.progress-bar.${level} .dot-progress-bar`);
        const percentLabel = document.querySelector(`.progress-bar.${level} .info-progress-bar .percent`);
        const fractionLabel = document.querySelector(`.progress-bar.${level} .info-progress-bar .fraction`);

        if (progressBarDot && percentLabel && fractionLabel) {
            progressBarDot.style.marginLeft = percent + '%';
            if (percent > 95) {
                progressBarDot.style.marginLeft = (percent - 3) + '%';
            }
            percentLabel.textContent = percent + '%';  // Round percentage to 2 decimal places
            fractionLabel.textContent = `${completed}/${total}`;
        } else {
            console.error('Error updating progress bars for level: ' + level);
        }
    }

    // Update the chart with the total progress percentage
    updateChart(totalPercent) {
        const chart = document.querySelector('.chart');

        if (chart) {
            chart.setAttribute('data-percent', totalPercent);
            document.querySelector(".chart span").innerHTML = totalPercent.toFixed(2) + '%';

            $(function() {
                $('.chart').easyPieChart({
                    size: 260,
                    barColor: "#5959E0FF",
                    scaleLength: 0,
                    lineWidth: 15,
                    trackColor: "rgba(8,8,38,0.58)",
                    lineCap: "circle",
                    animate: 2000,
                }).data('easyPieChart').update(totalPercent);
            });
        } else {
            console.error('Error updating chart');
        }
    }
}

// Initialize the ProgressManager instance when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    new ProgressManager();
});
