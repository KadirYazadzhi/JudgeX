let sum = 0;
const excludedIndices = [11, 13, 15, 17];
const language = localStorage.getItem('selectedCardIndex');
const level = localStorage.getItem('selectedButton');
const buttonToViewCertificate = document.querySelector(".certificateBtn")

for (let i = 1; i <= 19; i++) {
    if (!excludedIndices.includes(i) &&
        localStorage.getItem(`taskResult_${i}_${selectedLanguage}_${selectedLevel}`) === "111111") {
        sum++;
    }
}

let compare = 15;
if (selectedLevel === "4") {
    compare = 10;
    console.log(compare)
}

if (sum >= compare) {
    if (localStorage.getItem(`Take_Certificate_${selectedLanguage}${selectedLevel}`) === null
        && localStorage.getItem(`savedCertificate_${selectedLanguage}_${selectedLevel}`) === null) {

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
    else {
        if (localStorage.getItem(`savedCertificate_${selectedLanguage}_${selectedLevel}`) !== null) {
            buttonToViewCertificate.classList.remove("hidden");
        }
    }
    localStorage.setItem(`Take_Certificate_${level}_${language}`, "True");
}

console.log(localStorage.getItem(`Take_Certificate_${level}_${language}`));
console.log(localStorage.getItem(`savedCertificate_${selectedLanguage}_${selectedLevel}`))









