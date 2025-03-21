// Define a class to handle shop actions
class Shop {
    constructor() {
        this.shopCardButtons = document.querySelectorAll(".shop-card-button");
        this.init();
        this.word = "";
    }

    // Initialize event listeners for shop buttons
    init() {
        this.shopCardButtons.forEach((button, index) => {
            button.addEventListener('click', () => this.handleButtonClick(index));
        });
    }

    // Handle button click based on the index
    handleButtonClick(index) {
        switch (index) {
            case 0:
                this.buyHearts(1, 50);
                break;
            case 1:
                this.buyHearts(3, 140);
                break;
            case 2:
                this.buyHearts(5, 210);
                break;
            case 3:
                this.buyInfinityHearts(5000);
                break;
            case 4:
                this.activateSpecialPlan(10000);
                break;
            default:
                console.error('Invalid button index');
        }
    }

    // Method to buy a specified number of hearts
    buyHearts(hearts, diamonds) {
        if (diamonds <= getDiamonds()) {
            if (hearts <= 1) {
                this.word = "heart";
            }
            else {
                this.word = "hearts";
            }

            if (window.confirm(`Are you sure you want to buy ${hearts} ${this.word} for ${diamonds} diamonds?`)) {
                this.updateDiamonds(diamonds);
                const today = new Date().toISOString().slice(0, 10);
                let callData = JSON.parse(localStorage.getItem("callData")) || {count: 0, lastDate: today};
                callData.count -= hearts;
                localStorage.setItem('callData', JSON.stringify(callData));
            }
        } else {
            alert(`You don't have enough diamonds to buy this. You need ${diamonds - getDiamonds()} more diamonds.`);
        }
    }

    // Method to buy infinite hearts
    buyInfinityHearts(diamonds) {
        if (getInfinityHearts()) {
            alert("You have already bought infinity heart options.");
            return;
        }

        if (diamonds <= getDiamonds()) {
            if (window.confirm(`Are you sure you want to buy ∞ hearts for ${diamonds} diamonds?`)) {
                this.updateDiamonds(diamonds);
                localStorage.setItem('infinity_hearts', "True");
            }
        } else {
            alert(`You don't have enough diamonds to buy this. You need ${diamonds - getDiamonds()} more diamonds.`);
        }
    }

    // Method to activate a special plan
    activateSpecialPlan(diamonds) {
        if (getSpecialUser()) {
            alert("Your account is already special.");
            return
        }
        
        if (diamonds <= getDiamonds()) {
            if (window.confirm(`Are you sure you want to buy 'Special Plan' for ${diamonds} diamonds?`)) {
                localStorage.setItem('special-plan-activated', "True");
                this.updateDiamonds(diamonds);
            }
        } else {
            alert(`You don't have enough diamonds to buy this. You need ${diamonds - getDiamonds()} more diamonds.`);
        }
    }


    // Method to update the diamond availability
    updateDiamonds(diamondsSpent) {
        const currentDiamonds = getDiamonds();
        localStorage.setItem('diamond_availability', (currentDiamonds - diamondsSpent).toString());
    }
}

// Initialize the shop
new Shop();
