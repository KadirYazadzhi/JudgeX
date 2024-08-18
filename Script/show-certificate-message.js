let sum = 0;
const excludedIndices = [11, 13, 15, 17];

for (let i = 0; i < 19; i++) {
    if (!excludedIndices.includes(i) && localStorage.getItem(`taskResult_${i}_1`) === "111111") {
        sum++;
    }
}

if (sum >= 15) {
    const hiddenElement = document.getElementById('sp');
    hiddenElement.classList.remove("hidden");
    hiddenElement.style.display = 'flex';

    const languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"];
    const selectedLanguage = languageOptions[localStorage.getItem('selectedCardIndex')] || "C";

    const difficultyLevels = ["Easy", "Medium", "Hard", "Insane"];
    const selectedButton = difficultyLevels[localStorage.getItem('selectedButton') - 1] || "Insane";

    document.getElementById('subtitle-text').innerHTML = `You have successfully solved all the problems for the ${selectedButton} level in ${selectedLanguage}.`;
}
