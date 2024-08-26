class CountdownTimer {
    constructor() {
        this.endTimeKey = 'endTime';
        this.daysTextSelector = '.days-text';
        this.initialize();
    }

    saveEndTime(endTime) {
        localStorage.setItem(this.endTimeKey, endTime);
    }

    loadEndTime() {
        return parseInt(localStorage.getItem(this.endTimeKey), 10);
    }

    initialize() {
        if (!this.loadEndTime()) {
            this.initializeEndTime();
        }
        this.updateCountdown(); // Initial update
        setInterval(() => this.updateCountdown(), 1000);
    }

    initializeEndTime() {
        const daysText = document.querySelector(this.daysTextSelector);
        const targetTimeParts = daysText.textContent.match(/\d+/g);
        let targetTime = parseInt(targetTimeParts[0]) * 24 * 60 * 60 * 1000;
        targetTime += parseInt(targetTimeParts[1]) * 60 * 60 * 1000;
        targetTime += parseInt(targetTimeParts[2]) * 60 * 1000;
        targetTime += parseInt(targetTimeParts[3]) * 1000;

        const endTime = Date.now() + targetTime;
        this.saveEndTime(endTime);
    }

    updateCountdown() {
        const endTime = this.loadEndTime();
        let elapsedTime = endTime - Date.now();
        if (elapsedTime < 0) {
            elapsedTime = 0;
        }
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        const daysText = document.querySelector(this.daysTextSelector);
        daysText.textContent = `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    }
}

// Create an instance of CountdownTimer
new CountdownTimer();

