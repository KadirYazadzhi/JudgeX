let currentTask = getActiveTask();

function generateStorageKey() {
    return `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
}

function updateCodeEditorWithSavedCode() {
    const savedCode = localStorage.getItem(generateStorageKey(currentTask));
    if (savedCode) {
        codeEditor.value = savedCode;
    } else {
        codeEditor.value = "";
    }
}

function getCodeForActiveTask() {
    if (getActiveTask()) {
        return localStorage.getItem(`codeEditorContent_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`);
    }
    return null;
}


buttonToViewCode.addEventListener('click', () => {
    if (buttonToViewCode.classList.contains("active-icon")) {
        buttonToViewCode.classList.remove("active-icon");
        codeEditor.value = getCodeForActiveTask() || "";
    }
    else {
        updateCodeEditorWithSavedCode();
        buttonToViewCode.classList.add("active-icon");
    }
});
