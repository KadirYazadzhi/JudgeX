const profileName = document.getElementById('nav-footer-title');
const systemProfileImage = document.getElementById('system-profile-image');

document.addEventListener('DOMContentLoaded', function() {
    profileName.innerHTML = getUsernameValue();
    systemProfileImage.src = getUserProfileImage();
});