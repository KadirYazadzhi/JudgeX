document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('code-editor');
    const taskCards = document.querySelectorAll('.task-card');

    function getActiveTask() {
        const activeCard = document.querySelector('.task-card.active-task');
        return activeCard ? activeCard.dataset.value : null;
    }

    function getSelectedCardIndex() {
        return localStorage.getItem('selectedCardIndex');
    }

    function getSelectedButton() {
        return localStorage.getItem('selectedButton');
    }

    function loadCodeForActiveTask() {
        const activeTask = getActiveTask();
        const selectedCardIndex = getSelectedCardIndex();
        const selectedButton = getSelectedButton();

        if (activeTask && selectedCardIndex && selectedButton) {
            const key = `codeEditorContent_${activeTask}_${selectedCardIndex}_${selectedButton}`;
            const savedCode = localStorage.getItem(key);
            codeEditor.value = savedCode !== null ? savedCode : '';
        }
    }

    codeEditor.addEventListener('input', function() {
        const activeTask = getActiveTask();
        const selectedCardIndex = getSelectedCardIndex();
        const selectedButton = getSelectedButton();

        if (activeTask && selectedCardIndex && selectedButton) {
            const key = `codeEditorContent_${activeTask}_${selectedCardIndex}_${selectedButton}`;
            localStorage.setItem(key, codeEditor.value);
        }
    });

    taskCards.forEach(card => {
        card.addEventListener('click', function() {
            taskCards.forEach(c => c.classList.remove('active-task'));
            card.classList.add('active-task');

            loadCodeForActiveTask();
        });
    });

    loadCodeForActiveTask();
});

