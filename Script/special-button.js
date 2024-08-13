class ButtonHandler {
    constructor(buttonId) {
        this.button = document.getElementById(buttonId);
        this.initEventListeners();
    }

    initEventListeners() {
        this.button.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        if (this.getLocalStorageItem('selectedCardIndex') === null) {
            this.showAlert("Please choose language!");
            window.location.href = "#languages";
        }
        if (this.getLocalStorageItem('selectedButton') === null) {
            this.showAlert("Please choose difficulty level!");
            window.location.href = "#difficult";
        }
        if (this.getLocalStorageItem('selectedButton') != null && this.getLocalStorageItem('selectedCardIndex') != null) {
            this.showAlert("Starting....");
        }
    }

    getLocalStorageItem(key) {
        return localStorage.getItem(key);
    }

    showAlert(message) {
        alert(message);
    }

}

const specialButtonHandler = new ButtonHandler('special-button');


