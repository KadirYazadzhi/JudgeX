//Using in `code-compile.js`
const apiURL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true';
const rapidAPIHost = 'judge0-ce.p.rapidapi.com';
const rapidAPIKey = 'a4a8e6d2d7mshd11918bb81caf74p1f7e3fjsn9f85774f50f6';
const code = getCode();

//Using in the most of the js file that using in system
const activeTask = getActiveTask() ;

const selectedLanguage = getSelectedLanguage();
const selectedLevel = getSelectedLevel();

const taskCards = document.querySelectorAll('.task-card');

//Using in `change-exercise-name.js`
const languageText = document.getElementById('text-language');
const languageIcon = document.getElementById('icon-language');

const saveCodeAfterSubmit = getSaveCodeAfterSubmit();
const codeInTextArea = getCodeInTextArea();
const tasksResultFromTest = getTasksResultFromTest();

//Using in `download-exercise-document.js`
const documentButton = document.querySelector('.document-button');

//Using in `save-code-from-textarea.js`
const codeEditor = document.getElementById('code-editor');
const cards = document.querySelectorAll('.card');
const activeCard = getActiveCard();

//Using in `code-view-icon.js`
const buttonToViewCode = document.getElementById('saveCode');








function getCode() {
    return document.getElementById('code-editor').value;
}

function getActiveTask() {
    return document.querySelector('.task-card.active-task');
}

function getSelectedLanguage() {
    return localStorage.getItem('selectedCardIndex');
}

function getSelectedLevel() {
    return localStorage.getItem('selectedButton');
}

function getSaveCodeAfterSubmit() {
    return `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
}

function getCodeInTextArea() {
    return `codeEditorContent_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
}

function getTasksResultFromTest() {
    return `taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
}

function getActiveCard() {
    return document.querySelector('.task-card.active-task');
}
