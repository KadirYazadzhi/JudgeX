function adjustContainerWidth() {
    let screenWidth = window.innerWidth;
    let container = document.querySelector('.container');
    let baseWidth = 80;

    if (screenWidth < 1800) {
        let reduction = Math.floor((1800 - screenWidth) / 100) * 2;
        let newWidth = Math.max(baseWidth - reduction, 50);
        container.style.width = newWidth + '%';
    } else {
        container.style.width = baseWidth + '%';
    }
}

window.addEventListener('resize', adjustContainerWidth);
window.addEventListener('load', adjustContainerWidth);
