document.addEventListener('DOMContentLoaded', function () {
    class TimeTracker {
        constructor(page, trackAlways = false) {
            this.page = page;
            this.trackAlways = trackAlways;
            this.startTime = null;
            this.elapsedTime = this.getElapsedTime(); // Fetch elapsed time from localStorage
        }

        // Fetch or initialize the elapsed time for the page
        getElapsedTime() {
            return parseInt(localStorage.getItem(`elapsedTime_${this.page}`), 10) || 0;
        }

        // Start tracking time (always for website, conditionally for system)
        start() {
            if (this.trackAlways || (this.page === 'system' && window.location.pathname.includes('system'))) {
                this.startTime = Date.now(); // Set the start time to the current time
            }
        }

        // Stop tracking time, calculate the elapsed time and store it
        stop() {
            if (this.startTime) {
                const currentTime = Date.now();
                const sessionElapsedTime = Math.floor((currentTime - this.startTime) / 1000); // Time for this session
                this.elapsedTime += sessionElapsedTime; // Add this session's time to total elapsed time
                localStorage.setItem(`elapsedTime_${this.page}`, this.elapsedTime); // Save total elapsed time
                this.startTime = null; // Reset start time
            }
        }

        // Update elapsed time and store it in localStorage
        update() {
            if (this.startTime) {
                const currentTime = Date.now();
                const sessionElapsedTime = Math.floor((currentTime - this.startTime) / 1000); // Time for this session
                this.elapsedTime += sessionElapsedTime; // Add this session's time to total elapsed time
                localStorage.setItem(`elapsedTime_${this.page}`, this.elapsedTime); // Save total elapsed time
                this.startTime = currentTime; // Reset start time for continuous tracking
            }
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
            this.timeTypeText = document.querySelector(".time-name");
            this.activeCardIndex = 0;

            // Initialize separate time trackers for 'website' and 'system'
            this.websiteTracker = new TimeTracker('website', true); // Tracks always
            this.systemTracker = new TimeTracker('system'); // Tracks only when on system page

            this.initializeCards(); // Initialize event listeners for cards
            this.initializeFirstVisitDate(); // Initialize first visit date

            // Start tracking time for both website and system pages
            this.websiteTracker.start(); // Website time starts tracking always
            if (window.location.pathname.includes('system')) {
                this.systemTracker.start(); // System time starts tracking only if on system page
            }

            // Periodically update the displayed time every second
            setInterval(this.updateDisplayedTime.bind(this), 1000);

            // Stop tracking time when the page is unloaded or the user navigates away
            window.addEventListener('beforeunload', () => {
                this.systemTracker.stop();
                this.websiteTracker.stop();
            });
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

        hideTextElement() {
            this.timeTypeText.style.display = 'none'; // Hide the element that contains `D H M S` (Days, Hours, Minutes, Seconds)
        }

        showTextElement() {
            this.timeTypeText.style.display = 'flex'; // Show the element that contains `D H M S` (Days, Hours, Minutes, Seconds)
        }

        // Update the time displayed in the card-time element
        updateDisplayedTime() {
            const activeCard = this.timeCards[this.activeCardIndex];
            this.showTextElement();

            if (activeCard.textContent.includes('Times in the website')) {
                this.websiteTracker.update(); // Continuously update website time
                this.timeContainer.textContent = TimeTracker.formatTime(this.websiteTracker.getElapsedTime());
            }
            else if (activeCard.textContent.includes('Times in the system')) {
                if (window.location.pathname.includes('system')) {
                    this.systemTracker.update(); // Continuously update system time if on system page
                    this.timeContainer.textContent = TimeTracker.formatTime(this.systemTracker.getElapsedTime());
                }
                else {
                    this.timeContainer.textContent = TimeTracker.formatTime(this.systemTracker.getElapsedTime());
                }
            }
            else if (activeCard.textContent.includes('Registration Day')) {
                const firstVisitDate = localStorage.getItem('firstVisitDate');
                this.timeContainer.textContent = firstVisitDate ? new Date(firstVisitDate).toLocaleDateString() : 'Unknown';
                this.hideTextElement();
            }
        }
    }

    // Instantiate the TimeCardManager to initialize the logic
    new TimeCardManager();
});
