document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".cards");
    const cards = document.querySelectorAll(".card");

    // Задаване на ширината на картите
    cards.forEach(card => {
        card.style.width = window.innerWidth + 'px';
    });

    cardsContainer.style.width = window.innerWidth * 3 + 'px';

    let startX = 0;
    let currentIndex = 0;
    let isDragging = false;

    function updatePosition(smooth = true) {
        cardsContainer.style.transition = smooth ? "transform 0.3s ease" : "none";
        cardsContainer.style.transform = `translateX(${-currentIndex * window.innerWidth}px)`;
    }

    cardsContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        cardsContainer.style.transition = "none"; // Деактивиране на анимацията при плъзгане
    });

    cardsContainer.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        let moveX = e.touches[0].clientX - startX;

        // Ограничаване на движението в рамките на първата и последната карта
        let nextPosition = -currentIndex * window.innerWidth + moveX;
        if (nextPosition <= 0 && nextPosition >= -(cards.length - 1) * window.innerWidth) {
            cardsContainer.style.transform = `translateX(${nextPosition}px)`;
        }
    });

    cardsContainer.addEventListener("touchend", (e) => {
        if (!isDragging) return;
        isDragging = false;

        let moveX = e.changedTouches[0].clientX - startX;

        if (moveX < -50 && currentIndex < cards.length - 1) {
            currentIndex++; // Следваща карта
        } else if (moveX > 50 && currentIndex > 0) {
            currentIndex--; // Предишна карта
        }

        updatePosition();
    });

    updatePosition();
});
