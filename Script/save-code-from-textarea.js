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

        console.log('Active Task:', activeTask);
        console.log('Selected Card Index:', selectedCardIndex);
        console.log('Selected Button:', selectedButton);

        if (activeTask && selectedCardIndex && selectedButton) {
            const key = `codeEditorContent_${activeTask}_${selectedCardIndex}_${selectedButton}`;
            const savedCode = localStorage.getItem(key);
            codeEditor.value = savedCode !== null ? savedCode : '';
        } else {
            codeEditor.value = '';
        }
    }

    // Събитие за обновяване на кода в localStorage при въвеждане
    codeEditor.addEventListener('input', function() {
        const activeTask = getActiveTask();
        const selectedCardIndex = getSelectedCardIndex();
        const selectedButton = getSelectedButton();

        if (activeTask && selectedCardIndex && selectedButton) {
            const key = `codeEditorContent_${activeTask}_${selectedCardIndex}_${selectedButton}`;
            localStorage.setItem(key, codeEditor.value);
        }
    });

    // Обработване на събитие за клик върху задачите
    taskCards.forEach(card => {
        card.addEventListener('click', function() {
            // Премахване на активната клас от всички карти
            taskCards.forEach(c => c.classList.remove('active-task'));
            // Добавяне на активния клас към текущата карта
            card.classList.add('active-task');

            // Зареждане на кода за активната задача
            loadCodeForActiveTask();
        });
    });

    // Зареждане на кода за активната задача при първоначално зареждане
    loadCodeForActiveTask();
});

