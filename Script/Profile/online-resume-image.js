// Function to load saved image from localStorage
function loadImage() {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        document.querySelector('.resume-img').src = savedImage;
    }
}

// Function to handle image upload and save to localStorage
function handleImageUpload() {
    const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageBase64 = event.target.result;

            // Set the image src to the uploaded image
            document.querySelector('.resume-img').src = imageBase64;

            // Save the image in localStorage
            localStorage.setItem('profileImage', imageBase64);
        };

        // Convert the file to Base64
        if (file) {
            reader.readAsDataURL(file);
        }
    });
}

// Function to trigger the file input when image is clicked
document.querySelector('.resume-img').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

// Load the image on page load
window.addEventListener('DOMContentLoaded', function() {
    loadImage();
    handleImageUpload();
});