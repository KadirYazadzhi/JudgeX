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

for (let i = 0; i <= 19; i++) {
    if (i !== 11 && i !== 13 && i !== 15 && i !== 17) {
        localStorage.setItem(`taskResult_${i}_${selectedLanguage}_${selectedLevel}`, "111111")
    }
}