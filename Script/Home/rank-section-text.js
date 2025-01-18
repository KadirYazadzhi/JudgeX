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
        const diamonds = parseInt(localStorage.getItem('diamond_availability') || 0);
        this.diamondElement.textContent = diamonds.toString();
    }

    // Update the ranked people count based on diamond value
    updateRankedPeopleCount() {
        const diamondCount = parseInt(localStorage.getItem('diamond_availability') || 0);
        const storedData = JSON.parse(localStorage.getItem('RankedNumberRankSection'));

        // Check if stored data exists and is consistent
        if (
            storedData &&
            diamondCount === parseInt(storedData.currentDiamonds)
        ) {
            // Use existing rank data if diamonds match
            this.rankCountElement.textContent = `${storedData.currentRank} users`;
            return;
        }

        // Generate and set new rank count based on diamond value
        let rankedCount;
        if (diamondCount > 10000) {
            rankedCount = this.generateRandomNumber(1, 3);
        }
        else if (diamondCount > 5000) {
            rankedCount = this.generateRandomNumber(1, 10);
        }
        else if (diamondCount > 1000) {
            rankedCount = this.generateRandomNumber(10, 110);
        }
        else if (diamondCount > 100) {
            rankedCount = this.generateRandomNumber(100, 600);
        }
        else {
            rankedCount = this.generateRandomNumber(600, 1100);
        }

        // Update UI and store new rank data
        this.rankCountElement.textContent = `${rankedCount} users`;
        const data = {
            currentDiamonds: diamondCount.toString(),
            currentRank: rankedCount.toString(),
        };
        localStorage.setItem('RankedNumberRankSection', JSON.stringify(data));
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

    // Check if elements exist
    if (diamondElement && rankCountElement) {
        new RankSection(diamondElement, rankCountElement);
    }
    else {
        console.error("Diamond or rank count element not found. Check your selectors.");
    }
});
