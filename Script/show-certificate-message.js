let sum = 0;
const excludedIndices = [11, 13, 15, 17];
const language = localStorage.getItem('selectedCardIndex');
const level = localStorage.getItem('selectedButton');

for (let i = 1; i <= 19; i++) {
    if (!excludedIndices.includes(i) && localStorage.getItem(`taskResult_${activeTask}_${selectedLanguage}_${selectedLevel}`) === "111111") {
        sum++;
    }
}

if (sum >= 15) {
    if (localStorage.getItem(`Take_Certificate_${level}${language}`) === null) {
        const hiddenElement = document.getElementById('sp');
        hiddenElement.classList.remove("hidden");
        hiddenElement.style.display = 'flex';

        const languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"];
        const selectedLanguage = languageOptions[language] || "C";

        const difficultyLevels = ["Easy", "Medium", "Hard", "Insane"];
        const selectedButton = difficultyLevels[level - 1] || "Insane";

        document.getElementById('subtitle-text').innerHTML =
            `You have successfully solved all the problems for the ${selectedButton} level in ${selectedLanguage}.`;
    }
    localStorage.setItem(`Take_Certificate_${level}${language}`, "True")
}



