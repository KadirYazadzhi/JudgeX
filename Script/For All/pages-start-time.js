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

        // Start tracking time
        start() {
            if (this.trackAlways || (this.page === 'system' && window.location.pathname.includes('system'))) {
                this.startTime = Date.now() - this.elapsedTime * 1000; // Set start time relative to elapsed time
            }
        }

        // Update elapsed time without double-counting
        update() {
            if (this.startTime) {
                const currentTime = Date.now();
                this.elapsedTime = Math.floor((currentTime - this.startTime) / 1000); // Recalculate elapsed time
                localStorage.setItem(`elapsedTime_${this.page}`, this.elapsedTime); // Save total elapsed time
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
                this.systemTracker.update();
                this.websiteTracker.update();
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
            // Check if the element exists before attempting to modify it
            if (this.timeTypeText) {
                this.timeTypeText.style.display = 'flex'; // Show the element that contains `D H M S` (Days, Hours, Minutes, Seconds)
            }
        }

        updateDisplayedTime() {
            const activeCard = this.timeCards ? this.timeCards[this.activeCardIndex] : null;

            // Ensure activeCard exists before proceeding
            if (activeCard) {
                this.showTextElement();
                if (activeCard.textContent.includes('Times in the website')) {
                    // Ensure websiteTracker and timeContainer exist
                    if (this.websiteTracker && this.timeContainer) {
                        this.websiteTracker.update(); // Continuously update website time
                        this.timeContainer.textContent = TimeTracker.formatTime(this.websiteTracker.getElapsedTime());
                    }
                }
                else if (activeCard.textContent.includes('Times in the system')) {
                    // Ensure systemTracker and timeContainer exist
                    if (this.systemTracker && this.timeContainer) {
                        if (window.location.pathname.includes('system')) {
                            this.systemTracker.update(); // Continuously update system time if on system page
                            this.timeContainer.textContent = TimeTracker.formatTime(this.systemTracker.getElapsedTime());
                        }
                        else {
                            this.timeContainer.textContent = TimeTracker.formatTime(this.systemTracker.getElapsedTime());
                        }
                    }
                }
                else if (activeCard.textContent.includes('Registration Day')) {
                    const firstVisitDate = localStorage.getItem('firstVisitDate');
                    // Ensure timeContainer exists
                    if (this.timeContainer) {
                        this.timeContainer.textContent = firstVisitDate ? new Date(firstVisitDate).toLocaleDateString() : 'Unknown';
                    }
                    this.hideTextElement(); // Hide the text element regardless
                }
            }
        }
    }

    // Instantiate the TimeCardManager to initialize the logic
    new TimeCardManager();
});
