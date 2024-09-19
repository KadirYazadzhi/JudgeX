class TimeManager {
    constructor() {
        this.times = document.querySelectorAll(".times-in-website li");
        this.firstVisitDate = localStorage.getItem("firstVisitDate");
    }

    // Method to format the profile creation date in a human-readable way
    formatDate(dateString) {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Formats the date according to user's locale
    }

    // Method to convert seconds into days:hours:minutes:seconds format
    formatElapsedTime(seconds) {
        const sec = parseInt(seconds, 10);
        const days = Math.floor(sec / 86400);
        const hours = Math.floor((sec % 86400) / 3600);
        const minutes = Math.floor((sec % 3600) / 60);
        const secs = sec % 60;

        return `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
    }

    // Method to update the UI with the latest times from localStorage
    updateTimes() {
        // Fetch the latest times from localStorage each second
        const elapsedTimeSystem = localStorage.getItem("elapsedTime_system") || 0;
        const elapsedTimeIndex = localStorage.getItem("elapsedTime_index") || 0;

        // Update the displayed times if the required elements exist
        if (this.times.length >= 3) {
            this.times[0].innerHTML = `Profile Creation Date: ${this.formatDate(this.firstVisitDate)}`;
            this.times[1].innerHTML = `Time in the system: ${this.formatElapsedTime(elapsedTimeSystem)}`;
            this.times[2].innerHTML = `Times on the website: ${this.formatElapsedTime(elapsedTimeIndex)}`;
        } else {
            console.error("Not enough elements in the times list to display all data.");
        }
    }

    // Method to start fetching and updating the time from localStorage every second
    startUpdatingTime() {
        this.updateTimes(); // Initial update
        setInterval(() => {
            this.updateTimes(); // Fetch updated times from localStorage every second
        }, 1000); // Run every second
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

// Create an instance of TimeManager and start the time updating process
const timeManager = new TimeManager();
timeManager.startUpdatingTime();

