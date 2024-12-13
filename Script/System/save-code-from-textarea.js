document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('code-editor');
    const taskCards = document.querySelectorAll('.task-card');
    const refreshBtn = document.getElementById('refresh-result-btn');

    function clearTestResults() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.classList.remove('success', 'failure');
            card.classList.add('null');
            card.querySelector('.card-icon').textContent = '➖';
            card.querySelector('.card-title').textContent = `Test ${index + 1}: NULL`;
        });
    }

    function loadTestResult() {
        if (!getActiveTask()) return;

        const txt = localStorage.getItem(`taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`);

        const cards = document.querySelectorAll('.card');

        clearTestResults();

        if (txt) {
            for (let i = 0; i < txt.length && i < cards.length; i++) {
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

    function loadCodeForActiveTask() {
        if (getActiveTask() && getSelectedLanguage() && getSelectedLevel()) {
            const key = `codeEditorContent_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;

            const savedCode = localStorage.getItem(key);
            codeEditor.value = savedCode !== null ? savedCode : '';
        } else {
            codeEditor.value = '';
        }
    }

    codeEditor.addEventListener('input', function() {
        if (getActiveTask() && getSelectedLanguage() && getSelectedLevel()) {
            const key = `codeEditorContent_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
            localStorage.setItem(key, codeEditor.value);
        }
    });

    taskCards.forEach(card => {
        card.addEventListener('click', function() {
            taskCards.forEach(c => c.classList.remove('active-task'));
            card.classList.add('active-task');
            localStorage.setItem('activeTask', getActiveTask());

            loadTestResult();
            loadCodeForActiveTask();
        });
    });

    refreshBtn.addEventListener('click', function () {
        loadTestResult();
        refreshBtn.classList.add("active-icon");
        setTimeout(() => {
            refreshBtn.classList.remove("active-icon");
        }, 600);
    });

    if (!getActiveTask() && taskCards.length > 0) {
        taskCards[0].classList.add('active-task');
    }

    loadTestResult();
    loadCodeForActiveTask();
});