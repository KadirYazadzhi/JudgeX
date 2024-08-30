document.addEventListener('DOMContentLoaded', function() {
    let currentTask = getActiveTask();

    function generateStorageKey(task) {
        return `saveSubmitCode_${task}_${getSelectedLanguage()}_${getSelectedLevel()}`;
    }

    function updateCodeEditorWithSavedCode(task) {
        const savedCode = localStorage.getItem(generateStorageKey(task));
        codeEditor.value = savedCode ? savedCode : "";
    }

    getTaskCard().forEach(card => {
        card.addEventListener('click', function() {
            const newTask = getActiveTask();
            if (newTask !== currentTask) {
                buttonToViewCode.classList.remove("active-icon");
                currentTask = newTask;
                codeEditor.value = getCodeForTask(currentTask);
            }
        });
    });

    function getCodeForTask(task) {
        return localStorage.getItem(`codeEditorContent_${task}_${getSelectedLanguage()}_${getSelectedLevel()}`) || "";
    }

    buttonToViewCode.addEventListener('click', () => {
        if (buttonToViewCode.classList.contains("active-icon")) {
            buttonToViewCode.classList.remove("active-icon");
            codeEditor.value = getCodeForTask(currentTask);
        }
        else {
            updateCodeEditorWithSavedCode(currentTask);
            buttonToViewCode.classList.add("active-icon");
        }
    });
});

