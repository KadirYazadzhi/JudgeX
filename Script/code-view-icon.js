let currentTask = null;

function generateStorageKey(task) {
    return `saveSubmitCode_${task}_${selectedLanguage}_${selectedLevel}`;
}

function updateCodeEditorWithSavedCode() {
    const savedCode = localStorage.getItem(generateStorageKey(currentTask));
    if (savedCode) {
        codeEditor.value = savedCode;
    } else {
        codeEditor.value = "";  // Изчисти текстовото поле, ако няма запазен код
    }
}

function getActiveTask() {
    return localStorage.getItem('activeTask');
}

function getCodeForActiveTask() {
    const activeTask = getActiveTask();
    if (activeTask) {
        return localStorage.getItem(`codeEditorContent_${activeTask}_${language}_${level}`);
    }
    return null;
}

function initializeCurrentTask() {
    // Инициализиране на текущата активна задача при зареждане на страницата
    currentTask = getActiveTask();
    if (currentTask) {
        codeEditor.value = getCodeForActiveTask() || "";
    } else {
        codeEditor.value = "";  // Изчисти редактора, ако няма активна задача
    }
}

function handleTaskChange() {
    const activeTask = getActiveTask();

    // Ако активната задача е различна от текущата
    if (activeTask !== currentTask) {
        currentTask = activeTask;  // Актуализира текущата задача
        buttonToViewCode.classList.remove("active-icon");
        updateCodeEditorWithSavedCode();  // Зарежда новия код или изчиства редактора
    }
}

// Инициализация на страницата
document.addEventListener('DOMContentLoaded', () => {
    // Инициализираме текущата задача при зареждане
    initializeCurrentTask();

    // Добавяме слушател за промяна на задачата
    taskCards.forEach(card => {
        card.addEventListener('click', () => {
            // Променяме активната задача в localStorage
            localStorage.setItem('activeTask', card.id);  // Използваме уникален идентификатор на задачата
            handleTaskChange();  // Извикваме логиката за смяна на задачата
        });
    });
});

buttonToViewCode.addEventListener('click', () => {
    if (buttonToViewCode.classList.contains("active-icon")) {
        buttonToViewCode.classList.remove("active-icon");
        codeEditor.value = getCodeForActiveTask() || "";
    } else {
        updateCodeEditorWithSavedCode();  // Зарежда кода за текущата задача
        buttonToViewCode.classList.add("active-icon");
    }
});
