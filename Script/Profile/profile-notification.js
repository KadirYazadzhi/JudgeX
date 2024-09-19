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