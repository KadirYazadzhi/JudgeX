document.addEventListener("DOMContentLoaded", function () {
    function handleSingleSelection(selector, storageKey) {
        const elements = document.querySelectorAll(selector);
        const savedValue = localStorage.getItem(storageKey);

        elements.forEach(element => {
            if (element.dataset.theme === savedValue || element.dataset.fontSize === savedValue) {
                if (selector === ".theme-card") {
                    element.classList.add('active-theme');
                }
            }
            element.addEventListener('click', () => {
                elements.forEach(element => {
                    if (storageKey === "selectedTheme") {
                        element.classList.remove('active-theme');
                    }
                    else if (storageKey === "selectedFontSize") {
                        element.classList.remove('current-font');
                    }
                    else if (storageKey === "selectedColor") {
                        element.classList.remove('activeColor');
                    }
                });

                if (element.classList.contains('current-font') && storageKey === "selectedFontType") {
                    element.classList.remove('current-font');
                }
                else {
                    if (storageKey === "selectedTheme") {
                        element.classList.add('active-theme');
                    }
                    else if (storageKey === "selectedFontSize") {
                        element.classList.add('current-font');
                    }
                    else if (storageKey === "selectedFontType") {
                        element.classList.add('current-font');
                    }
                    else if (storageKey === "selectedColor") {
                        element.classList.add('activeColor');
                    }
                }

                localStorage.setItem(storageKey, element.dataset.theme || element.dataset.fontSize);
            });
        });
    }
    
    handleSingleSelection('.theme-card', 'selectedTheme');
    handleSingleSelection('.textFont', 'selectedFontSize');
    handleSingleSelection('.textType', 'selectedFontType');
    handleSingleSelection('.color-back', 'selectedColor');
});
