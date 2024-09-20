const elements = document.querySelector(".notifications");
let totalEasy = 0;
let totalMedium = 0;
let totalHard = 0;
let totalInsane = 0;


function createNotification(type, titleText, textText, typeIcon) {
    // Create the main notification div
    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    elements.appendChild(notification);

    // Create the icon element
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", typeIcon);

    // Create the left-notification div
    const leftNotification = document.createElement("div");
    leftNotification.classList.add("left-notification");

    // Create the title span
    const title = document.createElement("span");
    title.classList.add("title");
    title.textContent = titleText;

    // Create the text span
    const text = document.createElement("span");
    text.classList.add("text");
    text.textContent = textText;

    // Append title and text to the left-notification div
    leftNotification.appendChild(title);
    leftNotification.appendChild(text);

    // Append icon and left-notification to the main notification div
    notification.appendChild(icon);
    notification.appendChild(leftNotification);

}


function certificate() {
    let languages = ['C', 'C++', 'C#', 'Python', 'Java', 'Javascript', 'Typescript', 'Ruby', 'Go'];
    let levels = ['Basic', 'Medium', 'Hard', 'Insane'];
    function getLanguage(index) {
        return languages[index] || 'Unknown';
    }
    function getLevel(index) {
        return levels[index - 1] || 'Unknown';
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 1; j <= 4; j++) {
            const path = localStorage.getItem(`savedCertificate_${i}_${j}`);
            if (path !== null) {
                const certificateLanguage = getLanguage(i);
                const certificateLevel = getLevel(j);
                const messageCertificate = `${certificateLanguage} ${certificateLevel} Level`;

                createNotification("certificate-notification", "Earn Certificate", "You have earned a new certificate for " + messageCertificate, "fa-award");
            }
        }
    }
}

certificate()

function badge() {
    const badges = document.querySelectorAll(".badge-background");

    badges.forEach((badge, index) => {
        if (!badge.classList.contains("not-active-badge")) {
            if (index === 0) {
                createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Basic Level Knowledge", "fa-certificate");
            }
            if (index === 1) {
                createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Medium Level Knowledge", "fa-certificate");
            }
            if (index === 2) {
                createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Hard Level Knowledge", "fa-certificate");
            }
            if (index === 3) {
                createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Insane Level Knowledge", "fa-certificate");
            }
            if (index === 4) {
                createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Expert Level Knowledge", "fa-certificate");
            }

            if (index === 5 || index === 14 || index === 23 || index === 32) {
                if (index === 5) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C Basic Level", "fa-certificate");
                }
                if (index === 14) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C Medium Level", "fa-certificate");
                }
                if (index === 23) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C Hard Level", "fa-certificate");
                }
                if (index === 32) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C Insane Level", "fa-certificate");
                }
            }
            if (index === 6 || index === 15 || index === 24 || index === 33) {
                if (index === 6) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C++ Basic Level", "fa-certificate");
                }
                if (index === 15) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C++ Medium Level", "fa-certificate");
                }
                if (index === 24) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C++ Hard Level", "fa-certificate");
                }
                if (index === 33) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C++ Insane Level", "fa-certificate");
                }
            }
            if (index === 7 || index === 16 || index === 25 || index === 34) {
                if (index === 7) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C# Basic Level", "fa-certificate");
                }
                if (index === 16) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C# Medium Level", "fa-certificate");
                }
                if (index === 25) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C# Hard Level", "fa-certificate");
                }
                if (index === 34) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for C# Insane Level", "fa-certificate");
                }
            }
            if (index === 8 || index === 17 || index === 26 || index === 35) {
                if (index === 8) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Python Basic Level", "fa-certificate");
                }
                if (index === 17) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Python Medium Level", "fa-certificate");
                }
                if (index === 26) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Python Hard Level", "fa-certificate");
                }
                if (index === 35) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Python Insane Level", "fa-certificate");
                }
            }
            if (index === 9 || index === 18 || index === 27 || index === 36) {
                if (index === 9) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Java Basic Level", "fa-certificate");
                }
                if (index === 18) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Java Medium Level", "fa-certificate");
                }
                if (index === 27) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Java Hard Level", "fa-certificate");
                }
                if (index === 36) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Java Insane Level", "fa-certificate");
                }
            }
            if (index === 10 || index === 19 || index === 28 || index === 37) {
                if (index === 10) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Javascript Basic Level", "fa-certificate");
                }
                if (index === 19) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Javascript Medium Level", "fa-certificate");
                }
                if (index === 28) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Javascript Hard Level", "fa-certificate");
                }
                if (index === 37) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Javascript Insane Level", "fa-certificate");
                }
            }
            if (index === 11 || index === 20 || index === 29 || index === 38) {
                if (index === 11) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Typescript Basic Level", "fa-certificate");
                }
                if (index === 20) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Typescript Medium Level", "fa-certificate");
                }
                if (index === 29) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Typescript Hard Level", "fa-certificate");
                }
                if (index === 38) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Typescript Insane Level", "fa-certificate");
                }
            }
            if (index === 12 || index === 21 || index === 30 || index === 39) {
                if (index === 12) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Ruby Basic Level", "fa-certificate");
                }
                if (index === 21) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Ruby Medium Level", "fa-certificate");
                }
                if (index === 30) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Ruby Hard Level", "fa-certificate");
                }
                if (index === 39) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Ruby Insane Level", "fa-certificate");
                }
            }
            if (index === 13 || index === 22 || index === 31 || index === 40) {
                if (index === 13) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Go Basic Level", "fa-certificate");
                }
                if (index === 22) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Go Medium Level", "fa-certificate");
                }
                if (index === 31) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Go Hard Level", "fa-certificate");
                }
                if (index === 40) {
                    createNotification("badge-notification", "Earn Badge", "You have earned a new badge for Go Insane Level", "fa-certificate");
                }
            }

        }
    });
}
badge()


tasks()
function tasks() {
    // Iterate over all levels, languages, and tasks
    for (let task = 1; task < 100; task++) {
        for (let language = 0; language <= 8; language++) {
            for (let level = 1; level <= 4; level++) {
                const taskResult = localStorage.getItem(`taskResult_${task}_${language}_${level}`);

                if (taskResult === "111111") {

                    let lng = "";
                    let lvl = "";
                    let counter = 0;
                    switch (language) {
                        case 0:
                            lng = "C";
                            break;
                        case 1:
                            lng = "C++";
                            break;
                        case 2:
                            lng = "C#";
                            break;
                        case 3:
                            lng = "Python";
                            break;
                        case 4:
                            lng = "Java";
                            break;
                        case 5:
                            lng = "Javascript";
                            break;
                        case 6:
                            lng = "Typescript";
                            break;
                        case 7:
                            lng = "Ruby";
                            break;
                        case 8:
                            lng = "Go";
                            break;
                    }

                    if (taskResult === "111111") {
                        if (level === 1) {
                            lvl = "Easy";
                            counter =  10;
                        }
                        else if (level === 2) {
                            lvl = "Medium";
                            counter =  20;
                        }
                        else if (level === 3) {
                            lvl = "Hard";
                            counter =  30;
                        }
                        else if (level === 4) {
                            lvl = "Insane";
                            counter =  50;
                        }
                    }

                    createNotification("diamond-notification", "Earn Diamonds", "You earn " + counter + " diamonds from " + lng + " " + lvl + " exercise.", "fa-gem");
                }
            }
        }
    }
}


if (localStorage.getItem("user-register") !== null) {
    let date = new Date(localStorage.getItem('firstVisitDate')).toLocaleDateString();
    createNotification("account-notification", "Profile Registration", "You registered a new account on " + date, "fa-user");
}
