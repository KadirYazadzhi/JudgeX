// Class to manage the rank section display and update
class RankSection {
    constructor(diamondElement, rankCountElement) {
        this.diamondElement = diamondElement;
        this.rankCountElement = rankCountElement;
        this.init();
    }

    // Initialize the rank section
    init() {
        this.updateDiamondDisplay();
        this.updateRankedPeopleCount();
    }

    // Update the diamond display
    updateDiamondDisplay() {
        this.diamondElement.textContent = parseInt(localStorage.getItem('diamond_availability') || 0).toString();
    }

    // Update the ranked people count based on diamond value
    updateRankedPeopleCount() {
        if (localStorage.getItem('RankedNumberRankSection')) {
            this.rankCountElement.textContent = localStorage.getItem('RankedNumberRankSection') + " users";
            return;
        }

        // Generate and set new rank count based on diamond value
        const diamondCount = parseInt(localStorage.getItem('diamond_availability') || 0);
        let rankedCount;

        if (diamondCount > 10000) {
            rankedCount = this.generateRandomNumber(1, 3);
        } else if (diamondCount > 5000) {
            rankedCount = this.generateRandomNumber(1, 10);
        } else if (diamondCount > 1000) {
            rankedCount = this.generateRandomNumber(10, 110);
        } else if (diamondCount > 100) {
            rankedCount = this.generateRandomNumber(100, 600);
        } else {
            rankedCount = this.generateRandomNumber(600, 1100);
        }

        // Set and store the rank count
        this.rankCountElement.textContent = rankedCount.toString() + " users";
        localStorage.setItem('RankedNumberRankSection', rankedCount.toString());
    }

    // Generate a random number between a min and max value
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Initialize rank section on DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    const diamondElement = document.querySelector(".text-bottom-box span");
    const rankCountElement = document.querySelector(".text-bottom-box b");

    // Create a new instance of RankSection
    new RankSection(diamondElement, rankCountElement);
});
