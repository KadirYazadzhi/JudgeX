// Запазване на съдържанието в localStorage
function saveData() {
    const resumeContent = document.getElementById('resume').innerHTML;
    localStorage.setItem('resumeContent', resumeContent);
}

// Зареждане на съдържание от localStorage
function loadData() {
    const savedContent = localStorage.getItem('resumeContent');
    if (savedContent) {
        document.getElementById('resume').innerHTML = savedContent;
        addListeners();
    }
}

// Добавяне на нов ред при натискане на Enter
document.getElementById('resume').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const newSection = document.createElement('div');
        newSection.classList.add('section');
        newSection.setAttribute('contenteditable', 'true');
        newSection.innerHTML = `<i class="fa-solid fa-laptop-code"></i><span><br></span>`;
        document.getElementById('resume').appendChild(newSection);
        addListeners(); // Обновяване на слушателите за новите елементи
    }
});

// Проверка дали даден ред трябва да бъде изтрит (ако текстът е изтрит)
function checkEmptySections() {
    document.querySelectorAll('.section').forEach(section => {
        const text = section.querySelector('span').innerText.trim();
        if (text === '') {
            section.remove();
        }
    });
    saveData(); // Запазваме промените след проверката
}

// Добавяне на слушатели за промени в текста
function addListeners() {
    document.querySelectorAll('.section').forEach(section => {
        section.querySelector('span').addEventListener('input', () => {
            checkEmptySections(); // Проверка за празни секции
            saveData(); // Запазване на промените
        });
    });
}

// Зареждане на данни при зареждане на страницата
window.addEventListener('load', () => {
    loadData();
    addListeners();
});