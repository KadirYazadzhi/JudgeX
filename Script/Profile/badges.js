// BadgeManager class to handle badge logic
class BadgesManager {
    constructor(badges, excludedIndices, badgesCountElement) {
        this.badges = badges;
        this.excludedIndices = excludedIndices;
        this.badgesCountElement = badgesCountElement;
        this.activeBadgeCount = 0;
        this.initialize();
    }

    // Initialize badges and event listeners
    initialize() {
        this.badges.forEach((badge, index) => {
            badge.addEventListener('click', () => this.handleBadgeClick(badge));
            this.updateBadgeStatus(badge, index);
        });
        this.updateBadgeCountDisplay();
    }

    // Handle badge click events
    handleBadgeClick(badge) {
        if (badge.classList.contains("not-active-badge")) {
            alert("This badge is locked.");
        }
    }

    // Update badge status based on logic
    updateBadgeStatus(badge, index) {
        switch (index) {
            case 0:
                if (this.levelsBadge(1, 0, 19, 15)) {
                    this.activateBadge(badge);
                }
                break;
            case 1:
                if (this.levelsBadge(2, 20, 47, 15)) {
                    this.activateBadge(badge);
                }
                break;
            case 2:
                if (this.levelsBadge(3, 48, 73, 15)) {
                    this.activateBadge(badge);
                }
                break;
            case 3:
                if (this.levelsBadge(4, 75, 93, 10)) {
                    this.activateBadge(badge);
                }
                break;
            case 5:
                if (this.languageBadge(1, 0, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 6:
                if (this.languageBadge(1, 1, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 7:
                if (this.languageBadge(1, 2, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 8:
                if (this.languageBadge(1, 3, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 9:
                if (this.languageBadge(1, 4, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 10:
                if (this.languageBadge(1, 5, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 11:
                if (this.languageBadge(1, 6, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 12:
                if (this.languageBadge(1, 7, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
            case 13:
                if (this.languageBadge(1, 8, 0, 19)) {
                    this.activateBadge(badge);
                }
                break;
        }
    }

    // Activate a badge and increment the active badge count
    activateBadge(badge) {
        badge.classList.remove("not-active-badge");
        this.activeBadgeCount++;
        this.updateBadgeCountDisplay();
    }

    // Update the badge count display
    updateBadgeCountDisplay() {
        this.badgesCountElement.textContent = `${this.activeBadgeCount} / ${this.badges.length}`;
    }

    // Check if a level badge should be activated
    levelsBadge(level, start, end, sum) {
        for (let language = 0; language <= 8; language++) {
            let completed = 0;
            for (let task = start; task <= end; task++) {
                if (!this.excludedIndices.includes(task)) {
                    const taskKey = `taskResult_${task}_${language}_${level}`;
                    const taskValue = localStorage.getItem(taskKey);
                    if (taskValue) {
                        completed++;
                    }
                }
            }
            if (completed >= sum) {
                return true;
            }
        }
        return false;
    }

    // Check if a language badge should be activated
    languageBadge(level, language, start, end) {
        for (let task = start; task <= end; task++) {
            if (!this.excludedIndices.includes(task)) {
                const taskKey = `taskResult_${task}_${language}_${level}`;
                const taskValue = localStorage.getItem(taskKey);
                if (taskValue) {
                    return true;
                }
            }
        }
        return false;
    }

}

const badges = document.querySelectorAll(".badge-background");
const badgesCount = document.getElementById("badges-count");

new BadgesManager(badges, excludedIndices, badgesCount);


