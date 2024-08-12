document.addEventListener('DOMContentLoaded', function() {
    const taskCards = document.querySelectorAll('.task-card');
    const barStopper = document.querySelector('.bar-stopper');
    const barText = document.querySelector('.difficult-text');

    taskCards.forEach(function(card) {
        card.addEventListener('click', function() {
            taskCards.forEach(function(c) {
                c.classList.remove('active-task');
            });

            const taskValue = parseInt(card.dataset.value);
            barStopper.style.marginLeft = `${taskValue + 1}%`;
            barText.style.marginLeft = `${taskValue - 1}%`;

            card.classList.add('active-task');
        });
    });
});