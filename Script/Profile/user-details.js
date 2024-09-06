const profileUsernameField = document.getElementById('profile-username');
const profileImage = document.getElementById('profile-image');

profileUsernameField.innerHTML = '@' + getUsernameValue();
profileImage.src = 'Image/icon-user-1.png';