//Using in `code-compile.js`
const apiURL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true';
const rapidAPIHost = 'judge0-ce.p.rapidapi.com';
const rapidAPIKey = 'a4a8e6d2d7mshd11918bb81caf74p1f7e3fjsn9f85774f50f6';

//Using in the most of the js file that using in system
const selectedLanguage = getSelectedLanguage();
const selectedLevel = getSelectedLevel();

// Using for all logic certificate generation
const PriceToGenerateCertificate = { "Easy": 100, "Medium": 250, "Hard": 350, "Insane": 500 }; // Price to generate certificate
const languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"]; // Options for programming languages
const difficultyLevels = ["Easy", "Medium", "Hard", "Insane", "Special"]; // Options for difficulty levels

const excludedIndices = [11, 13, 15, 17, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 71, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92]; // Indices of tasks to be excluded from counting


function getTaskCard() {
    return document.querySelectorAll('.task-card');
}

//Using in `change-exercise-name.js`
const languageText = document.getElementById('text-language');
const languageIcon = document.getElementById('icon-language');

//Using in `download-exercise-document.js`
const documentButton = document.querySelector('.document-button');

//Using in `save-code-from-textarea.js`
const codeEditor = document.getElementById('code-editor');
const cards = document.querySelectorAll('.card');

//Using in `code-view-icon.js`
const buttonToViewCode = document.getElementById('saveCode');

function getActiveTask() {
    const activeCard = document.querySelector('.task-card.active-task');
    return activeCard ? activeCard.dataset.value : null;
}

function getSelectedLanguage() {
    return localStorage.getItem('selectedCardIndex');
}

function getDiamonds() { // Method to get the current amount of diamonds
    return parseInt(localStorage.getItem('diamond_availability') || '0', 10);
}

function getUserProfileImage() {
    return localStorage.getItem('profileImage');
}

function getUserRank() {
    return localStorage.getItem('RankedNumberRankSection');
}

function countEarnedCertificate() {
    let count = 0

    for (let i = 0; i < languageOptions.length; i++) {
        for (let j = 1; j <= difficultyLevels.length; j++) {
            if (localStorage.getItem(`savedCertificate_${i}_${j}`) !== null) {
                count++;
            }
        }
    }

    return count;
}

function countSolvedTasks() {
    let count = 0;

    for (let taskIndex = 1; taskIndex <= 93; taskIndex++) {
        for (let language = 0; language <= 8; language++) {
            for (let level = 1; level <= 4; level++) {
                if (!excludedIndices.includes(taskIndex) &&
                    localStorage.getItem(`taskResult_${taskIndex}_${language}_${level}`) === "111111") {
                    count++;
                }
            }
        }
    }

    return count;
}

function getFirstVisitDate() {
    const date = new Date(localStorage.getItem('firstVisitDate'));

    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
}

function getSelectedLevel() {
    return localStorage.getItem('selectedButton');
}

function getSavedCertificate() {
    return localStorage.getItem(`savedCertificate_${getSelectedLanguage()}_${getSelectedLevel()}`);
}

function getTakeCertificate() {
    return localStorage.getItem(`Take_Certificate_${getSelectedLanguage()}_${getSelectedLevel()}`);
}

function getUsernameValue() {
    return localStorage.getItem('currentUsername');
}

function getPasswordValue() {
    return localStorage.getItem('currentPassword');
}

function getEmailValue() {
    return localStorage.getItem('currentEmail');
}

function getCountryValue() {
    return localStorage.getItem('currentCountry');
}

function getDiamond() {
    return parseInt(localStorage.getItem('diamond_availability') || 0);
}

function getSpecialUser() {
    return localStorage.getItem('special-plan-activated');
}

function getInfinityHearts() {
    return localStorage.getItem('infinity_hearts');
}