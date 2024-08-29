let sum = 0;
const excludedIndices = [11, 13, 15, 17, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 71, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92];
const buttonToViewCertificate = document.querySelector(".certificateBtn")

let startNumber = null;
let endNumber = null;
let compare = 15;
switch (getSelectedLevel()) {
    case "1":
        startNumber = 1;
        endNumber = 19;
        break;
    case "2":
        startNumber = 20;
        endNumber = 47;
        break;
    case "3":
        startNumber = 48;
        endNumber = 73;
        break;
    case "4":
        startNumber = 75;
        endNumber = 93;
        compare = 10;
        break;
}

for (let i = startNumber; i <= endNumber; i++) {
    localStorage.setItem(`taskResult_${i}_${getSelectedLanguage()}_${getSelectedLevel()}`, "111111");
    if (!excludedIndices.includes(i) &&
        localStorage.getItem(`taskResult_${i}_${getSelectedLanguage()}_${getSelectedLevel()}`) === "111111") {
        sum++;
    }
}

function showCertificateMessageBox() {
    const hiddenElement = document.getElementById('sp');
    hiddenElement.classList.remove("hidden");
    hiddenElement.style.display = 'flex';

    const languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"];
    const selectedLanguage = languageOptions[getSelectedLanguage()] || "C";

    const difficultyLevels = ["Easy", "Medium", "Hard", "Insane"];
    const selectedButton = difficultyLevels[getSelectedLevel() - 1] || "Insane";

    document.getElementById('subtitle-text').innerHTML =
        `You have successfully solved all the problems for the ${selectedButton} level in ${selectedLanguage}.`;
}

if (sum >= compare) {
    if (localStorage.getItem(`Take_Certificate_${getSelectedLanguage()}_${getSelectedLevel()}`) === null
        && localStorage.getItem(`savedCertificate_${getSelectedLanguage()}_${getSelectedLevel()}`) === null) {
        showCertificateMessageBox();
    }
    else if (localStorage.getItem(`savedCertificate_${getSelectedLanguage()}_${getSelectedLevel()}`) === null) {
        showCertificateMessageBox();
    }
    else {
        if (localStorage.getItem(`savedCertificate_${selectedLanguage}_${selectedLevel}`) !== null) {
            buttonToViewCertificate.classList.remove("hidden");
        }
    }

    localStorage.setItem(`Take_Certificate_${getSelectedLanguage()}_${getSelectedLevel()}`, "True");
}









