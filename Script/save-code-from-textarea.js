document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('code-editor');
    const taskCards = document.querySelectorAll('.task-card');

    function getActiveTask() {
        const activeCard = document.querySelector('.task-card.active-task');
        return activeCard ? activeCard.getAttribute('data-value') : null;
    }

    function loadCodeForActiveTask() {
        const activeTask = getActiveTask();
        if (activeTask !== null) {
            const savedCode = localStorage.getItem('codeEditorContent_' + activeTask);
            codeEditor.value = savedCode !== null ? savedCode : '';
        }
    }

    codeEditor.addEventListener('input', function() {
        const activeTask = getActiveTask();
        if (activeTask !== null) {
            localStorage.setItem('codeEditorContent_' + activeTask, codeEditor.value);
        }
    });

    taskCards.forEach(card => {
        card.addEventListener('click', function() {

            loadCodeForActiveTask();
        });
    });

    loadCodeForActiveTask();
});