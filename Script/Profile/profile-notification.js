class NotificationManager {
    constructor() {
        this.notifications = document.querySelector(".notifications");
        this.maxNotifications = 50; // Maximum allowed notifications
    }

    // Create a new notification and append it to the DOM
    createNotification(type, titleText, textText, typeIcon) {
        const notification = document.createElement("div");
        notification.classList.add("notification", type);

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", typeIcon);

        const leftNotification = document.createElement("div");
        leftNotification.classList.add("left-notification");

        const title = document.createElement("span");
        title.classList.add("title");
        title.textContent = titleText;

        const text = document.createElement("span");
        text.classList.add("text");
        text.textContent = textText;

        leftNotification.appendChild(title);
        leftNotification.appendChild(text);
        notification.appendChild(icon);
        notification.appendChild(leftNotification);
        this.notifications.appendChild(notification);

        this.removeOldNotifications(); // Remove oldest notifications if exceeding the limit
    }

    // Remove the oldest notifications if there are more than 50
    removeOldNotifications() {
        const currentNotifications = this.notifications.children;
        if (currentNotifications.length > this.maxNotifications) {
            // Remove oldest notification
            this.notifications.removeChild(currentNotifications[0]);
        }
    }

    // Count the number of current notifications
    countNotifications() {
        return this.notifications.children.length;
    }
}

class ProfileCertificateManager {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
        this.languages = ['C', 'C++', 'C#', 'Python', 'Java', 'Javascript', 'Typescript', 'Ruby', 'Go'];
        this.levels = ['Basic', 'Medium', 'Hard', 'Insane'];
    }

    // Get language based on index
    getLanguage(index) {
        return this.languages[index] || 'Unknown';
    }

    // Get level based on index
    getLevel(index) {
        return this.levels[index - 1] || 'Unknown';
    }

    // Generate certificate notifications from localStorage data
    generateCertificates() {
        for (let i = 0; i < this.languages.length; i++) {
            for (let j = 1; j <= 4; j++) {
                const path = localStorage.getItem(`savedCertificate_${i}_${j}`);
                if (path !== null) {
                    const messageCertificate = `${this.getLanguage(i)} ${this.getLevel(j)} Level`;
                    this.notificationManager.createNotification(
                        "certificate-notification",
                        "Earn Certificate",
                        `You have earned a new certificate for ${messageCertificate}`,
                        "fa-award"
                    );
                }
            }
        }
    }
}

class BadgeManager {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }

    // Generate badge notifications based on badge states
    generateBadges() {
        const badges = document.querySelectorAll(".badge-background");

        badges.forEach((badge, index) => {
            if (!badge.classList.contains("not-active-badge")) {
                let badgeMessage;
                if (index === 0) {
                    badgeMessage = "Basic Level Knowledge";
                } else if (index === 1) {
                    badgeMessage = "Medium Level Knowledge";
                } else if (index === 2) {
                    badgeMessage = "Hard Level Knowledge";
                } else if (index === 3) {
                    badgeMessage = "Insane Level Knowledge";
                }
                if (badgeMessage) {
                    this.notificationManager.createNotification(
                        "badge-notification",
                        "Earn Badge",
                        `You have earned a new badge for ${badgeMessage}`,
                        "fa-certificate"
                    );
                }
            }
        });
    }
}

class TaskManager {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }

    // Generate task notifications based on task completion
    generateTaskNotifications() {
        const languages = ['C', 'C++', 'C#', 'Python', 'Java', 'Javascript', 'Typescript', 'Ruby', 'Go'];
        const levels = ['Easy', 'Medium', 'Hard', 'Insane'];

        for (let task = 1; task < 100; task++) {
            for (let language = 0; language < languages.length; language++) {
                for (let level = 1; level <= levels.length; level++) {
                    const taskResult = localStorage.getItem(`taskResult_${task}_${language}_${level}`);
                    if (taskResult === "111111") {
                        this.notificationManager.createNotification(
                            "diamond-notification",
                            "Earn Diamonds",
                            `You earn ${level * 10} diamonds from ${languages[language]} ${levels[level - 1]} exercise.`,
                            "fa-gem"
                        );
                    }
                }
            }
        }
    }
}

class ProfileManager {
    constructor(notificationManager) {
        this.notificationManager = notificationManager;
    }

    // Generate profile registration notification
    checkProfileRegistration() {
        const userRegister = localStorage.getItem("user-register");
        if (userRegister !== null) {
            const date = new Date(localStorage.getItem('firstVisitDate')).toLocaleDateString();
            this.notificationManager.createNotification(
                "account-notification",
                "Profile Registration",
                `You registered a new account on ${date}`,
                "fa-user"
            );
        }
    }
}

// Initialize managers and run the program
const notificationManager = new NotificationManager();
const certificateManager = new ProfileCertificateManager(notificationManager);
const badgeManager = new BadgeManager(notificationManager);
const taskManager = new TaskManager(notificationManager);
const profileManager = new ProfileManager(notificationManager);

certificateManager.generateCertificates();
badgeManager.generateBadges();
taskManager.generateTaskNotifications();
profileManager.checkProfileRegistration();

console.log("Total Notifications:", notificationManager.countNotifications());
