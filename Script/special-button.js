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
            if (localStorage.getItem("user-register") !== null) {
                this.showAlert("Starting....");
                window.location.href = "system.html";
            }
            else {
                alert("To use the system, please first register or log in to your account.");
                window.location.href = "#";
            }
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


