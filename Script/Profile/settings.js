document.addEventListener("DOMContentLoaded", function () {
    // Функция за обработка на селекции с един активен елемент
    function handleSingleSelection(selector, storageKey) {
        const elements = document.querySelectorAll(selector);
        const savedValue = localStorage.getItem(storageKey);

        elements.forEach(element => {
            // Активиране на запазеното значение
            if (element.dataset.theme === savedValue || element.dataset.fontSize === savedValue) {
                if (selector === ".theme-card") {
                    element.classList.add('active-theme');
                }
            }
            element.addEventListener('click', () => {
                // Премахване на активния клас от всички елементи
                elements.forEach(element => {
                    if (storageKey === "selectedTheme") {
                        element.classList.remove('active-theme');
                    }
                    else if (storageKey === "selectedFontSize") {
                        element.classList.remove('current-font');
                    }
                });
                
                if (storageKey === "selectedFontType" && element.classList.contains("current-font")) {
                    element.classList.remove('current-font');
                }

                // Активиране на текущия елемент
                if (storageKey === "selectedTheme") {
                    element.classList.add('active-theme');
                }
                else if (storageKey === "selectedFontSize") {
                    element.classList.add('current-font');
                }
                else if (storageKey === "selectedFontType") {
                    element.classList.add('current-font');
                }

                // Запазване на избора в Local Storage
                localStorage.setItem(storageKey, element.dataset.theme || element.dataset.fontSize);
            });
        });
    }

    // Функция за обработка на селекции с множество активни елементи
    function handleMultiSelection(selector, storageKey, styleProperty, styleValue) {
        const element = document.querySelector(selector);
        const textElement = document.querySelector('.some-text-element'); // Изберете текста, който ще бъде стилово променен
        const isActive = localStorage.getItem(storageKey) === 'true';

        // Проверка и прилагане на стил от Local Storage
        if (isActive) {
            element.classList.add('active');
            textElement.style[styleProperty] = styleValue;
        }

        element.addEventListener('click', () => {
            const isActive = element.classList.toggle('active');
            textElement.style[styleProperty] = isActive ? styleValue : '';
            localStorage.setItem(storageKey, isActive);
        });
    }

    // Инициализация на темите (само един може да бъде активен)
    handleSingleSelection('.theme-card', 'selectedTheme');

    // Инициализация на размерите на шрифта (само един може да бъде активен)
    handleSingleSelection('.textFont', 'selectedFontSize');

    handleSingleSelection('.textType', 'selectedFontType');

    // Инициализация на шрифт тип (може да са активни и двата)
    handleMultiSelection('.font.back[data-font-type="bold"]', 'isBoldActive', 'fontWeight', 'bold');
    handleMultiSelection('.font-back[data-font-type="italic"]', 'isItalicActive', 'fontStyle', 'italic');
});
