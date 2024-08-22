document.addEventListener('DOMContentLoaded', function() {
    const resultCards = document.querySelectorAll('.card');

    resultCards.forEach(card => {
        card.addEventListener('click', function() {
            const iconCard = card.querySelector('.card-icon');

            if (iconCard && iconCard.textContent.trim() === "➖") {
                alert("Please submit your code to view the test result.");
            }
        });
    });
});
