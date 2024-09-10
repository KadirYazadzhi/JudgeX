// Запазване на съдържанието в localStorage
function saveData() {
    const resumeContent = document.querySelector('.content.resume').innerHTML;
    localStorage.setItem('resumeContent', resumeContent);
}

// Зареждане на съдържание от localStorage
function loadData() {
    const savedContent = localStorage.getItem('resumeContent');
    if (savedContent) {
        document.querySelector('.content.resume').innerHTML = savedContent;
        addEmojiListeners(); // Добавяме слушателите за клик върху емоджитата след зареждане
    }
}

// Слушатели за клик върху емоджита
function addEmojiListeners() {
    document.querySelectorAll('.emoji').forEach(emoji => {
        emoji.addEventListener('click', () => {
            const newEmoji = prompt('Enter new emoji:', emoji.dataset.emoji);
            if (newEmoji) {
                emoji.innerHTML = newEmoji;
                emoji.dataset.emoji = newEmoji;
                saveData(); // Запазваме съдържанието след смяна на емоджито
            }
        });
    });
}

// Добавяне на събития за запазване на съдържанието при промени
document.querySelectorAll('.content [contenteditable]').forEach(element => {
    element.addEventListener('input', () => {
        saveData();
    });
});

// Зареждане на данни при зареждане на страницата
window.addEventListener('load', () => {
    loadData();
    addEmojiListeners(); // Добавяне на слушатели за емоджита при зареждане на страницата
});