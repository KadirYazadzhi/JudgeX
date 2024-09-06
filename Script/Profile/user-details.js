// Class to manage user profile details
class UserProfile {
    constructor() {
        this.profileUsernameField = document.getElementById('profile-username');
        this.profileImage = document.getElementById('profile-image');
        this.diamondField = document.getElementById('diamond-availability');
        this.updateProfile();
    }

    /**
     * Update the profile details including username, image, and diamond count
     */
    updateProfile() {
        this.setUsername();
        this.setProfileImage();
        this.setDiamondCount();
    }

    /**
     * Set the username in the profile
     */
    setUsername() {
        this.profileUsernameField.innerHTML = '@' + getUsernameValue();
    }

    /**
     * Set the profile image source
     */
    setProfileImage() {
        this.profileImage.src = 'Image/icon-user-1.png';
    }

    /**
     * Set the diamond count in the profile
     */
    setDiamondCount() {
        this.diamondField.innerHTML = `${getDiamond()} <i class="fa-solid fa-gem"></i>`;
    }
}

// Initialize the UserProfile class when the script runs
new UserProfile();
