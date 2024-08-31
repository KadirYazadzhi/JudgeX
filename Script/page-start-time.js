document.addEventListener('DOMContentLoaded', function() {
    class TimeTracker {
        constructor(page) {
            this.page = page;
            this.startTime = this.getStartTime(); // Initialize start time
            this.elapsedTime = this.getElapsedTime(); // Initialize elapsed time
        }

        // Fetch or set start time for the page
        getStartTime() {
            let startTime = localStorage.getItem(`startTime_${this.page}`);
            if (!startTime) {
                startTime = Date.now();
                localStorage.setItem(`startTime_${this.page}`, startTime);
            }
            return parseInt(startTime, 10);
        }

        // Fetch elapsed time from localStorage
        getElapsedTime() {
            return parseInt(localStorage.getItem(`elapsedTime_${this.page}`), 10) || 0;
        }

        // Update elapsed time and store it in localStorage
        updateTime() {
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - this.startTime) / 1000) + this.elapsedTime;
            localStorage.setItem(`elapsedTime_${this.page}`, elapsedTime);
            if (this.page === 'system') {
                // Reset start time for system page only to keep counting accurately
                localStorage.setItem('startTime_system', Date.now());
            }
            return elapsedTime;
        }

        // Static method for formatting time
        static formatTime(seconds) {
            const days = Math.floor(seconds / 86400);
            const hours = Math.floor((seconds % 86400) / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${String(days).padStart(2, '0')} ${String(hours).padStart(2, '0')} ${String(minutes).padStart(2, '0')} ${String(secs).padStart(2, '0')}`;
        }
    }

    class TimeCardManager {
        constructor() {
            this.timeCards = document.querySelectorAll(".type-time-card");
            this.timeTypeElement = document.querySelector(".time-type");
            this.timeContainer = document.querySelector('.card-time');
            this.activeCardIndex = 0;

            this.websiteTracker = new TimeTracker('website');
            this.systemTracker = new TimeTracker('system');

            this.initializeCards(); // Initialize event listeners for cards
            this.initializeFirstVisitDate(); // Initialize first visit date

            // Periodically update the displayed time every second
            setInterval(this.updateDisplayedTime.bind(this), 1000);
        }

        // Initialize the time cards and setup event listeners
        initializeCards() {
            this.timeCards.forEach((card, index) => {
                if (card.classList.contains("active-time-card")) {
                    this.setActiveCard(index);
                }

                card.addEventListener('click', () => {
                    this.timeCards.forEach(c => c.classList.remove("active-time-card"));
                    card.classList.add("active-time-card");
                    this.setActiveCard(index);
                });
            });
        }

        // Display the text corresponding to the selected time card
        setActiveCard(index) {
            this.activeCardIndex = index;
            this.timeTypeElement.innerHTML = this.timeCards[index].textContent;
        }

        // Initialize first visit date if not set
        initializeFirstVisitDate() {
            let firstVisitDate = localStorage.getItem('firstVisitDate');
            if (!firstVisitDate) {
                firstVisitDate = new Date().toISOString();
                localStorage.setItem('firstVisitDate', firstVisitDate);
            }
        }

        // Update the time displayed in the card-time element
        updateDisplayedTime() {
            let elapsedTime;
            const activeCard = this.timeCards[this.activeCardIndex];

            if (activeCard.textContent.includes('Times in the website')) {
                elapsedTime = this.websiteTracker.updateTime();
                this.timeContainer.textContent = TimeTracker.formatTime(elapsedTime);
            } else if (activeCard.textContent.includes('Times in the system')) {
                if (window.location.pathname.includes('system')) {
                    elapsedTime = this.systemTracker.updateTime();
                } else {
                    elapsedTime = this.systemTracker.getElapsedTime(); // Display without updating when not on system page
                }
                this.timeContainer.textContent = TimeTracker.formatTime(elapsedTime);
            } else if (activeCard.textContent.includes('Registration Day')) {
                const firstVisitDate = localStorage.getItem('firstVisitDate');
                this.timeContainer.textContent = firstVisitDate ? new Date(firstVisitDate).toLocaleDateString() : 'Unknown';
            }
        }
    }

    // Instantiate the TimeCardManager to initialize the logic
    new TimeCardManager();
});
