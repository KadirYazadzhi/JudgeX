class UserProfileImageManager {
    constructor(profileImageId, profileBoxSelector) {
        this.profileImage = document.getElementById(profileImageId);
        this.profileBox = document.querySelector(profileBoxSelector);

        this.init();
    }

    // Initialize the profile image setup
    init() {
        const userProfileImage = getUserProfileImage();

        if (userProfileImage) {
            this.updateProfileImage(userProfileImage);
        }
    }

    // Update the profile image in the DOM
    updateProfileImage(imageSrc) {
        if (this.profileImage) {
            this.profileImage.remove();
        }

        const newImage = document.createElement('img');
        newImage.classList.add('profile-image');
        newImage.src = imageSrc;
        this.profileBox.appendChild(newImage);
    }
}

// Instantiate the UserProfileImageManager class
new UserProfileImageManager('profile-image', '.profile');