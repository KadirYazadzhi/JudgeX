const timeBtn = document.querySelector(".time");
const timeCard = document.querySelector(".time-card");

timeBtn.addEventListener('click', function () {
    timeCard.classList.remove("hidden");
});