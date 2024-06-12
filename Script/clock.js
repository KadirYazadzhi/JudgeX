function saveEndTime(endTime) {
    localStorage.setItem('endTime', endTime);
}

function loadEndTime() {
    return parseInt(localStorage.getItem('endTime'));
}

function initializeEndTime() {
    const daysText = document.querySelector('.days-text');
    const targetTimeParts = daysText.textContent.match(/\d+/g);
    let targetTime = parseInt(targetTimeParts[0]) * 24 * 60 * 60 * 1000; // преобразуваме дни в милисекунди
    targetTime += parseInt(targetTimeParts[1]) * 60 * 60 * 1000; // добавяме часове
    targetTime += parseInt(targetTimeParts[2]) * 60 * 1000; // добавяме минути
    targetTime += parseInt(targetTimeParts[3]) * 1000; // добавяме секунди

    const endTime = Date.now() + targetTime;
    saveEndTime(endTime);
}

function updateCountdown() {
    const endTime = loadEndTime();
    let elapsedTime = endTime - Date.now();
    if (elapsedTime < 0) {
        elapsedTime = 0;
    }
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const daysText = document.querySelector('.days-text');
    daysText.textContent = `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
}

if (!loadEndTime()) {
    initializeEndTime();
}

setInterval(function() {
    updateCountdown();
}, 1000);

updateCountdown();
