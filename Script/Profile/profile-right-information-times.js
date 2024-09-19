class TimeManager {
    constructor() {
        this.times = document.querySelectorAll(".times-in-website li");
        this.firstVisitDate = localStorage.getItem("firstVisitDate");
        this.elapsedTimeSystem = localStorage.getItem("elapsedTime_system");
        this.elapsedTimeIndex = localStorage.getItem("elapsedTime_index");
    }

    // Method to format the profile creation date in a human-readable way
    formatDate(dateString) {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Formats the date according to user's locale
    }

    // Method to convert seconds into days:hours:minutes:seconds format
    formatElapsedTime(seconds) {
        if (!seconds) return 'N/A';
        const sec = parseInt(seconds, 10);

        const days = Math.floor(sec / 86400);
        const hours = Math.floor((sec % 86400) / 3600);
        const minutes = Math.floor((sec % 3600) / 60);
        const secs = sec % 60;

        // Format the result as DD HH MM SS
        return `${String(days).padStart(2, '0')} days ${String(hours).padStart(2, '0')} hours ${String(minutes).padStart(2, '0')} minutes ${String(secs).padStart(2, '0')} seconds`;
    }

    // Method to update the UI with the retrieved times
    updateTimes() {
        if (this.times.length >= 3) {
            this.times[0].innerHTML = `Profile Creation Date: ${this.formatDate(this.firstVisitDate)}`;
            this.times[1].innerHTML = `Hours in the system: ${this.formatElapsedTime(this.elapsedTimeSystem)}`;
            this.times[2].innerHTML = `Hours on the index page: ${this.formatElapsedTime(this.elapsedTimeIndex)}`;
        } else {
            console.error("Not enough elements in the times list to display all data.");
        }
    }

    // Static method to initialize first visit date if not set
    static initializeFirstVisitDate() {
        if (!localStorage.getItem("firstVisitDate")) {
            const now = new Date().toISOString();
            localStorage.setItem("firstVisitDate", now);
        }
    }
}

// Ensure first visit date is set in localStorage
TimeManager.initializeFirstVisitDate();

// Create an instance of TimeManager and update the times in the UI
const timeManager = new TimeManager();
timeManager.updateTimes();
