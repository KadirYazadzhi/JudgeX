const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener('click', function () {
    if (localStorage.getItem("user-register") !== null) {
        window.location.href = "profile.html";
    }
    else {
        alert("Please log in or sign up first.")
    }
});