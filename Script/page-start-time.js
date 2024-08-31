document.addEventListener('DOMContentLoaded', function() {
    const timeCards = document.querySelectorAll(".type-time-card");
    const timeType = document.querySelector(".time-type");
    const timeContainer = document.querySelector('.card-time');

    // Различаване на страницата: 'system' или 'index'
    const currentPage = window.location.pathname.includes('system') ? 'system' : 'index';

    // Функция за форматиране на времето в дни, часове, минути и секунди
    function formatTime(seconds) {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(days).padStart(2, '0')} ${String(hours).padStart(2, '0')} ${String(minutes).padStart(2, '0')} ${String(secs).padStart(2, '0')}`;
    }

    // Обновяване на времето за двете категории
    function updateTime() {
        // Обновяване на времето за целия сайт (брои постоянно)
        let startTimeWebsite = parseInt(localStorage.getItem('startTime_website'), 10);
        if (!startTimeWebsite) startTimeWebsite = Date.now();
        const currentTime = Date.now();
        const elapsedTimeWebsite = Math.floor((currentTime - startTimeWebsite) / 1000);
        localStorage.setItem('elapsedTime_website', elapsedTimeWebsite);

        // Обновяване на времето за системата (брои само когато сме в system.html)
        let startTimeSystem = parseInt(localStorage.getItem('startTime_system'), 10);
        let elapsedTimeSystem = parseInt(localStorage.getItem('elapsedTime_system'), 10) || 0;

        if (currentPage === 'system') {
            if (!startTimeSystem) startTimeSystem = Date.now();
            elapsedTimeSystem += Math.floor((currentTime - startTimeSystem) / 1000);
            localStorage.setItem('elapsedTime_system', elapsedTimeSystem);
            localStorage.setItem('startTime_system', Date.now());
        }

        // Показване на времето в съответствие с активната карта
        const activeCard = document.querySelector(".active-time-card");
        if (activeCard) {
            if (activeCard.textContent.includes('Times in the website')) {
                timeContainer.textContent = formatTime(elapsedTimeWebsite);
            } else if (activeCard.textContent.includes('Times in the system')) {
                timeContainer.textContent = formatTime(elapsedTimeSystem);
            } else if (activeCard.textContent.includes('Registration Day')) {
                const firstVisitDate = localStorage.getItem('firstVisitDate');
                timeContainer.textContent = firstVisitDate ? new Date(firstVisitDate).toLocaleDateString() : 'Unknown';
            }
        }
    }

    // Показване на текста за типа време
    function displayTypeText(index) {
        timeType.innerHTML = timeCards[index].textContent;
    }

    // Инициализация на картите и събитията при клик
    timeCards.forEach((card, index) => {
        if (card.classList.contains("active-time-card")) {
            displayTypeText(index);
        }

        card.addEventListener('click', function () {
            // Деактивираме всички карти и активираме текущата
            timeCards.forEach(c => c.classList.remove("active-time-card"));
            card.classList.add("active-time-card");

            // Показваме текста за типа време
            displayTypeText(index);

            // Обновяваме времето в контейнера според активната карта
            updateTime();
        });
    });

    // Функция за инициализация на времето
    function initialize() {
        // Проверка и запазване на датата на първо влизане
        let firstVisitDate = localStorage.getItem('firstVisitDate');
        if (!firstVisitDate) {
            firstVisitDate = new Date().toISOString();
            localStorage.setItem('firstVisitDate', firstVisitDate);
        }

        // Инициализация на времето за сайта (брои постоянно)
        if (!localStorage.getItem('startTime_website')) {
            localStorage.setItem('startTime_website', Date.now());
        }

        // Инициализация на времето за системата (брои само когато сме в system.html)
        if (!localStorage.getItem('elapsedTime_system')) {
            localStorage.setItem('elapsedTime_system', 0);
        }

        // Обновяване на времето на всяка секунда
        setInterval(updateTime, 1000);
    }

    // Стартиране на инициализацията
    initialize();
});
