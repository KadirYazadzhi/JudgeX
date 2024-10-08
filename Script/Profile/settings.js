document.addEventListener("DOMContentLoaded", function () {
    function handleSingleSelection(selector, storageKey) {
        const elements = document.querySelectorAll(selector);
        const savedValue = localStorage.getItem(storageKey);

        elements.forEach(element => {
            // Добавяме само запазения стил, без да променяме другата логика
            if (element.dataset.theme === savedValue) {
                element.classList.add('active-theme');
            } else if (element.dataset.fontSize === savedValue) {
                element.classList.add('current-font');
            } else if (element.dataset.fontType === savedValue) {
                element.classList.add('current-font');
            } else if (element.dataset.color === savedValue) {
                element.classList.add('activeColor');
            }

            element.addEventListener('click', () => {
                // Запазваме логиката, която вече имаш за премахване на класовете
                elements.forEach(el => {
                    if (storageKey === "selectedTheme") {
                        el.classList.remove('active-theme');
                    }
                    else if (storageKey === "selectedFontSize") {
                        el.classList.remove('current-font');
                    }
                    else if (storageKey === "selectedColor") {
                        el.classList.remove('activeColor');
                    }
                });

                // Запазваме също така логиката за добавяне на класове
                if (element.classList.contains('current-font') && storageKey === "selectedFontType") {
                    element.classList.remove('current-font');
                } else {
                    if (storageKey === "selectedTheme") {
                        element.classList.add('active-theme');
                    } else if (storageKey === "selectedFontSize") {
                        element.classList.add('current-font');
                    } else if (storageKey === "selectedFontType") {
                        element.classList.add('current-font');
                    } else if (storageKey === "selectedColor") {
                        element.classList.add('activeColor');
                    }
                }

                // Запазваме избора в localStorage
                localStorage.setItem(storageKey, element.dataset.theme || element.dataset.fontSize || element.dataset.fontType || element.dataset.color);
            });
        });
    }

    // Използваме функцията без да променяме другата част
    handleSingleSelection('.theme-card', 'selectedTheme');
    handleSingleSelection('.textFont', 'selectedFontSize');
    handleSingleSelection('.textType', 'selectedFontType');
    handleSingleSelection('.color-back', 'selectedColor');
});
