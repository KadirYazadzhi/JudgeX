document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('code-editor');
    const taskCards = document.querySelectorAll('.task-card');

    function getActiveTask() {
        const activeCard = document.querySelector('.task-card.active-task');
        return activeCard ? activeCard.dataset.value : null;
    }

    function clearTestResults() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('success', 'failure', 'null');
            card.classList.add('null');
            card.querySelector('.card-icon').textContent = '➖';
            card.querySelector('.card-title').textContent = `Test ${Array.from(cards).indexOf(card) + 1}: NULL`;
        });
    }

    function loadTestResult() {
        const activeTask = getActiveTask(); // Взимаме текущата активна задача
        const txt = localStorage.getItem(`taskResult_${activeTask}`);
        const cards = document.querySelectorAll('.card.null');

        // Изчистваме старите резултати
        clearTestResults();

        if (txt !== null && activeTask) {
            for (let i = 0; i < txt.length; i++) {
                if (txt[i] === "1") {
                    cards[i].classList.remove('null');
                    cards[i].classList.add('success');
                    cards[i].querySelector('.card-icon').textContent = '✔️';
                    cards[i].querySelector('.card-title').textContent = `Test ${i + 1}: Passed`;
                } else if (txt[i] === "0") {
                    cards[i].classList.remove('null');
                    cards[i].classList.add('failure');
                    cards[i].querySelector('.card-icon').textContent = '❌';
                    cards[i].querySelector('.card-title').textContent = `Test ${i + 1}: Failed`;
                }
            }
        }
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
            localStorage.setItem('activeTask', activeTask);
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

            loadTestResult();  // Зареждаме само резултатите за текущо избраната задача
            loadCodeForActiveTask();  // Зареждаме само кода за текущо избраната задача

            console.log(localStorage.getItem('activeTask'))
        });
    });

    // Задаваме първата задача като активна при зареждане на страницата, ако няма активна задача
    if (!getActiveTask() && taskCards.length > 0) {
        taskCards[0].classList.add('active-task');
    }

    // Зареждаме тестовите резултати и кода за активната задача при зареждане на страницата
    loadTestResult();
    loadCodeForActiveTask();
});

