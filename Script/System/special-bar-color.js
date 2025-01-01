function specialBarColor() {
    const bar = document.getElementById('bar');

    if (getSpecialUser() && parseInt(getSelectedLevel()) === 5) {
        bar.classList.add("special-bar");
        console.log(bar)
    }
    else {
        bar.classList.remove("special-bar");
        console.log(77777)
    }
}


document.addEventListener('DOMContentLoaded', function () {
    specialBarColor();
});
