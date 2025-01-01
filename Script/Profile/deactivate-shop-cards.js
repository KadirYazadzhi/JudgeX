function deactivateShopCards() {
    const infinityHeartsBox = document.querySelector(".gold-box");
    const specialUserBox = document.querySelector(".big-box");

    if (getSpecialUser()) {
        specialUserBox.classList.add("deactivate");
    }

    if (getInfinityHearts()) {
        infinityHeartsBox.classList.add("deactivate");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    deactivateShopCards();
});
