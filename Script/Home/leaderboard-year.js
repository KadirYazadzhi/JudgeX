class RewardCalculator {
    constructor() {
        // Initialize the event listener for the range input
        this.initializeEventListeners();
    }

    // Method to initialize event listeners
    initializeEventListeners() {
        document.getElementById('range').addEventListener('input', () => this.handleInputChange());
    }

    // Method to handle input changes
    handleInputChange() {
        const isYearly = document.getElementById('range').value === '2';
        this.updateRewards(isYearly);
    }

    // Method to update rewards based on the selected plan
    updateRewards(isYearly) {
        document.querySelectorAll('.container').forEach(container => {
            const pointsElement = container.querySelector('.point-text');
            const diamondsElement = container.querySelector('.diamond-box p');

            if (pointsElement && diamondsElement) {
                // Extract base values or parse them from the text content
                const basePoints = this.extractBaseValue(pointsElement, 'basePoints');
                const baseDiamonds = this.extractBaseValue(diamondsElement, 'baseDiamonds');

                // Save base values to dataset if not already saved
                this.saveBaseValues(pointsElement, diamondsElement, basePoints, baseDiamonds);

                // Calculate updated values based on the selected plan
                const updatedPoints = isYearly ? this.calculateYearlyValue(basePoints) : basePoints;
                const updatedDiamonds = isYearly ? this.calculateYearlyValue(baseDiamonds) : baseDiamonds;

                // Update the UI with the new values
                this.updateUI(pointsElement, diamondsElement, updatedPoints, updatedDiamonds);
            }
        });
    }

    // Method to extract base values from dataset or text content
    extractBaseValue(element, datasetKey) {
        return parseInt(element.dataset[datasetKey], 10) || parseInt(element.textContent.replace(/\D/g, ''), 10);
    }

    // Method to save base values to dataset
    saveBaseValues(pointsElement, diamondsElement, basePoints, baseDiamonds) {
        if (!pointsElement.dataset.basePoints) {
            pointsElement.dataset.basePoints = basePoints;
            diamondsElement.dataset.baseDiamonds = baseDiamonds;
        }
    }

    // Method to calculate yearly value with a 10% bonus
    calculateYearlyValue(baseValue) {
        return Math.round(baseValue * 12 * 1.1);
    }

    // Method to update the UI with new values
    updateUI(pointsElement, diamondsElement, updatedPoints, updatedDiamonds) {
        pointsElement.textContent = `Earn ${updatedPoints} points`;
        diamondsElement.textContent = updatedDiamonds.toLocaleString();
    }
}

// Instantiate the RewardCalculator class
const rewardCalculator = new RewardCalculator();