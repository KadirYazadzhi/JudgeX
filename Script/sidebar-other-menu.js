const timeBtn = document.querySelector(".time");
const timeCardBackground = document.querySelector(".background-time");

timeBtn.addEventListener('click', function () {
    if (timeCardBackground.classList.contains("hidden")) {
        timeCardBackground.classList.remove("hidden");
    }
    else {
        timeCardBackground.classList.add("hidden");
    }
});