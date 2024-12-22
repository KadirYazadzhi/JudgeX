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
const difficultyLevels = ["Easy", "Medium", "Hard", "Insane"]; // Options for difficulty levels

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

function getFirstVisitDate() {
    return localStorage.getItem('firstVisitDate');
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

function getInfinityDiamond() {
    return localStorage.getItem('infinity_hearts');
}