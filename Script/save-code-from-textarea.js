document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('code-editor');
    const taskCards = document.querySelectorAll('.task-card');

    function getActiveTask() {
        const activeCard = document.querySelector('.task-card.active-task');
        return activeCard ? activeCard.textContent.trim() : null;
    }

    function getSelectedCardIndex() {
        return localStorage.getItem('selectedCardIndex');
    }

    function loadCodeForActiveTask() {
        const activeTask = getActiveTask();
        const selectedCardIndex = getSelectedCardIndex();

        if (activeTask !== null && selectedCardIndex !== null) {
            const savedCode = localStorage.getItem(`codeEditorContent_${activeTask}_${selectedCardIndex}`);
            codeEditor.value = savedCode !== null ? savedCode : '';
        } else {
            codeEditor.value = '';
        }
    }

    codeEditor.addEventListener('input', function() {
        const activeTask = getActiveTask();
        const selectedCardIndex = getSelectedCardIndex();

        if (activeTask !== null && selectedCardIndex !== null) {
            localStorage.setItem(`codeEditorContent_${activeTask}_${selectedCardIndex}`, codeEditor.value);
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
