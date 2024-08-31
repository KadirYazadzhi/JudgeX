document.addEventListener('DOMContentLoaded', function () {
    class TimeManager {
        constructor(timeSelector) {
            this.timeElement = document.querySelector(timeSelector);
            this.updateInterval = 1000; // Update interval in milliseconds
            this.start();
        }

        // Method to get the current time formatted as 'YYYY-MM-DD HH:MM:SS'
        getFormattedTime() {
            const now = new Date();

            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }

        // Method to update the time display
        updateTimeDisplay() {
            this.timeElement.textContent = this.getFormattedTime();
        }

        // Method to start updating the time display
        start() {
            this.updateTimeDisplay(); // Update immediately
            setInterval(() => this.updateTimeDisplay(), this.updateInterval); // Update every second
        }
    }

    // Instantiate the TimeManager class for the specific time element
    const timeManager = new TimeManager('.times-now');
});
