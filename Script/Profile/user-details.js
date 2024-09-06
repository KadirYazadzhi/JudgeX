const profileUsernameField = document.getElementById('profile-username');
const profileImage = document.getElementById('profile-image');
const diamondField = document.getElementById('diamond-availability');

profileUsernameField.innerHTML = '@' + getUsernameValue();
profileImage.src = 'Image/icon-user-1.png';
diamondField.innerHTML = `${getDiamond()} <i class="fa-solid fa-gem"></i>`

localStorage.setItem('diamond_availability', "10000");