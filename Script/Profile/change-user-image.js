class ProfileImageHandler {
    constructor(profileImageId, fileInputId) {
        this.profileImage = document.getElementById(profileImageId);
        this.fileInput = document.getElementById(fileInputId);
        this.init();
    }

    // Initialize event listeners
    init() {
        this.profileImage.addEventListener('click', () => this.openFileSelector());
        this.fileInput.addEventListener('change', (event) => this.handleFileSelection(event));
    }

    // Open the file selector dialog
    openFileSelector() {
        this.fileInput.click();
    }

    // Handle file selection and validate the file type
    handleFileSelection(event) {
        const file = event.target.files[0];

        // Validate if the selected file is an image
        if (file && file.type.startsWith('image/') && this.isValidImageExtension(file.name)) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;

                img.onload = () => {
                    const size = Math.min(img.width, img.height);

                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Ensure the image is square by cropping
                    canvas.width = canvas.height = size;
                    ctx.drawImage(img, (img.width - size) / 2, (img.height - size) / 2, size, size, 0, 0, size, size);

                    const finalImage = canvas.toDataURL('image/jpeg');
                    this.profileImage.src = finalImage;

                    // Save the image to localStorage
                    this.saveImageToLocalStorage(finalImage);
                };
            };

            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file with a supported format (e.g., .jpg, .jpeg, .png, .gif).');
        }
    }

    // Validate file extension to ensure it is an image format
    isValidImageExtension(fileName) {
        const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        const fileExtension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
        return validExtensions.includes(fileExtension);
    }

    // Save the image to localStorage
    saveImageToLocalStorage(imageData) {
        localStorage.setItem('profileImage', imageData);
    }
}

// Instantiate the ProfileImageHandler class
new ProfileImageHandler('profile-image', 'file-input');
