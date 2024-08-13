const languageText = document.getElementById('text-language');
const languageIcon = document.getElementById('icon-language');

const selectedCardIndex = localStorage.getItem('selectedCardIndex');

if (selectedCardIndex !== null) {
    switch (selectedCardIndex) {
        case "0":
            languageText.innerHTML = "C++";
            languageIcon.outerHTML = `
              <svg id="icon-language" class="cplusplus" xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" viewBox="0 0 24 24">
                <path d="M20.66 7a1.51 1.51 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.57 1.57 0 0 0 .22.76 1.51 1.51 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.51 1.51 0 0 0 .55-.57 1.57 1.57 0 0 0 .22-.76V7.76a1.57 1.57 0 0 0-.22-.76zM12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.20-1 .61A3 3 0 0 0 9 12a2.88 2.88 0 0 0 .4 1.48 3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92zm5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z"></path>
            </svg>`;
            break;
        case "1":
            languageText.innerHTML = "Python";
            languageIcon.outerHTML = `
              <svg id="icon-language" class="python" xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" viewBox="0 0 24 24">
                <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path>
                <path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path>
              </svg>`;
            break;
        case "2":
            languageText.innerHTML = "HTML";
            languageIcon.outerHTML = `
                <svg class="html" xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" viewBox="0 0 24 24">
                    <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
                </svg>`;
            break;
        case "3":
            languageText.innerHTML = "Java";
            languageIcon.outerHTML = ``;
            break;
        case "4":
            languageText.innerHTML = "Javascript";
            languageIcon.outerHTML = ``;
            break;
        case "5":
            languageText.innerHTML = "Typescript";
            languageIcon.outerHTML = ``;
            break;
        case "6":
            languageText.innerHTML = "PHP";
            languageIcon.outerHTML = ``;
            break;
        case "7":
            languageText.innerHTML = "Postgres SQL";
            languageIcon.outerHTML = ``;
            break;
        case "8":
            languageText.innerHTML = "Go";
            languageIcon.outerHTML = ``;
            break;
    }
}