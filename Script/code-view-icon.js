let act;

function generateStorageKey() {
    return `saveSubmitCode_${activeCard}_${selectedLanguage}_${selectedLevel}`;
}

function updateTextarea() {
    const savedCode = localStorage.getItem(generateStorageKey());
    codeEditor.value = savedCode !== null ? savedCode : codeInTextArea;
}

buttonToViewCode.addEventListener('click', function () {
    if (buttonToViewCode.classList.contains("active-icon")) {
        buttonToViewCode.classList.remove("active-icon");
        codeEditor.value = codeInTextArea;
    }
    else {
        act = activeCard;
        updateTextarea();
        buttonToViewCode.classList.add("active-icon");
    }
});

function handleTaskChange() {
    const currentActiveTask = localStorage.getItem('activeTask');
    if (currentActiveTask !== act) {
        buttonToViewCode.classList.remove("active-icon");
        codeEditor.value = codeInTextArea;
        act = currentActiveTask;
    }
}

document.querySelectorAll('.task-selector').forEach(task => {
    task.addEventListener('click', handleTaskChange);
});

handleTaskChange();


