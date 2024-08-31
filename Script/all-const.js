//Using in `code-compile.js`
const apiURL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true';
const rapidAPIHost = 'judge0-ce.p.rapidapi.com';
const rapidAPIKey = 'a4a8e6d2d7mshd11918bb81caf74p1f7e3fjsn9f85774f50f6';

//Using in the most of the js file that using in system
const selectedLanguage = getSelectedLanguage();
const selectedLevel = getSelectedLevel();

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

function getSelectedLevel() {
    return localStorage.getItem('selectedButton');
}

function getSavedCertificate() {
    return localStorage.getItem(`savedCertificate_${getSelectedLanguage()}_${getSelectedLevel()}`);
}

function getTakeCertificate() {
    return localStorage.getItem(`Take_Certificate_${getSelectedLanguage()}_${getSelectedLevel()}`);
}