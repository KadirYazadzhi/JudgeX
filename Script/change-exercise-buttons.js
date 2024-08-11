document.addEventListener('DOMContentLoaded', function() {
    const taskCards = document.querySelectorAll('.task-card');

    taskCards.forEach(function(card) {
        card.addEventListener('click', function() {
            taskCards.forEach(function(c) {
                c.classList.remove('active-task');
            });

            card.classList.add('active-task');
        });
    });
});