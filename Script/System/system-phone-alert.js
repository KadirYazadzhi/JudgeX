class ResponsiveAlert {
    constructor() {
        this.alertMessage = "The system page is responsive, but we not recommended to use it from phone, please use device with bigger screen to have full experience.";
        this.storageKey = "Alert_Phone_Message_Load";
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => this.checkAndShowAlert());
    }

    checkAndShowAlert() {
        if (this.shouldShowAlert()) {
            this.showAlert();
            this.setAlertShown();
        }
    }

    shouldShowAlert() {
        return window.innerWidth < 600 && localStorage.getItem(this.storageKey) === null;
    }

    showAlert() {
        alert(this.alertMessage);
    }

    setAlertShown() {
        localStorage.setItem(this.storageKey, "True");
    }
}

// Създаване на инстанция на класа
new ResponsiveAlert();
