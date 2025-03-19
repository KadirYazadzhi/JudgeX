function specialBarColor() {
    function specialBarColor() {
        const bar = document.querySelector('.bar');
        if (bar && getSpecialUser() && parseInt(getSelectedLevel()) === 5) {
            requestAnimationFrame(() => {
                bar.classList.add("special-bar");
            });
        } else {
            requestAnimationFrame(() => {
                bar?.classList.remove("special-bar");
            });
        }
    }

}

document.addEventListener('DOMContentLoaded', function () {

});

setTimeout(function () {
    document.querySelector(".bar").classList.add("special-bar");
    console.log(111)
}, 2000);

