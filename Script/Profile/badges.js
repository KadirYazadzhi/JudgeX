const badges = document.querySelectorAll(".badge-background");
excludedIndices = [11, 13, 15, 17, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 71, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92];

badges.forEach((badge, index) => {
    badge.addEventListener('click', function () {
        if (badge.classList.contains("not-active-badge")) {
            alert("This bagde is lock.")
        }
    });

    switch (index) {
        case 0:
            if (levelsBadge(1, 0, 19, 15)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 1:
            if (levelsBadge(2, 20, 47, 15)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 2:
            if (levelsBadge(3, 48, 73, 15)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 3:
            if (levelsBadge(4, 75, 93, 10)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 4:
            // Special badge function
            break;
        case 5:
            if (languageBadge(1, 0, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 6:
            if (languageBadge(1, 1, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 7:
            if (languageBadge(1, 2, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 8:
            if (languageBadge(1, 3, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 9:
            if (languageBadge(1, 4, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 10:
            if (languageBadge(1, 5, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 11:
            if (languageBadge(1, 6, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 12:
            if (languageBadge(1, 7, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;
        case 13:
            if (languageBadge(1, 8, 0, 19)) {
                badge.classList.remove("not-active-badge");
            }
            break;

    }

});

function levelsBadge(level, start, end, sum) {
    for (let language = 0; language <= 8; language++) {
        let completed = 0;
        for (let task = start; task <= end; task++) {
            if (!excludedIndices.includes(task)) {
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

function languageBadge(level, language, start, end) {
    for (let task = start; task <= end; task++) {
        if (!excludedIndices.includes(task)) {
            const taskKey = `taskResult_${task}_${language}_${level}`;
            const taskValue = localStorage.getItem(taskKey);

            if (taskValue) {
                return true;
            }
        }
    }
    return false;
}
