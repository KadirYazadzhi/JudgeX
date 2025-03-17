if (window.innerWidth < 768) {
    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".leaderboard-card");
        console.log(cards);
        const dots = document.querySelectorAll(".leaderboard-dot");
        console.log(dots);

        let activeIndex = 1;

        function updateActiveCard() {
            cards.forEach((card, index) => {
                card.style.display = index === activeIndex ? "flex" : "none";
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === activeIndex);
                console.log(index)
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener("click", function () {
                activeIndex = index;
                updateActiveCard();
            });
        });

        updateActiveCard();
    });

}