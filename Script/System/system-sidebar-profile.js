document.addEventListener('DOMContentLoaded', function() {
    const profileName = document.getElementById('nav-footer-title');
    const systemProfileImage = document.getElementById('system-profile-image');

    if (profileName) profileName.innerHTML = getUsernameValue();

    if (systemProfileImage) {
        const userProfileImage = getUserProfileImage();

        if (!userProfileImage && systemProfileImage.tagName.toLowerCase() === "img") {
            const svgElement = document.createElement("div");
            svgElement.innerHTML = `
                <svg id="profile-image" class="profile-image thumb" xmlns="http://www.w3.org/2000/svg" zoomAndPan="magnify" viewBox="0 0 75 74.999997" preserveAspectRatio="xMidYMid meet" version="1.0">
                    <path fill="#b3b3b3" d="M 75.003906 37.5 C 75.003906 47.097656 71.402344 55.84375 65.476562 62.476562 C 58.609375 70.164062 48.621094 75.003906 37.503906 75.003906 C 26.382812 75.003906 16.390625 70.164062 9.53125 62.476562 C 3.601562 55.84375 0 47.097656 0 37.5 C 0 16.792969 16.789062 0 37.503906 0 C 58.210938 0 75.003906 16.792969 75.003906 37.5" fill-opacity="1" fill-rule="nonzero"></path>
                    <path fill="#f2f2f2" d="M 37.503906 44.410156 C 44.300781 44.410156 50.488281 36.71875 50.488281 28.277344 C 50.488281 20.296875 48.945312 12.410156 37.503906 12.410156 C 26.054688 12.410156 24.511719 20.296875 24.511719 28.277344 C 24.511719 36.71875 30.703125 44.410156 37.503906 44.410156" fill-opacity="1" fill-rule="nonzero"></path>
                    <path fill="#f2f2f2" d="M 65.476562 62.476562 C 58.609375 70.164062 48.621094 75.003906 37.503906 75.003906 C 26.382812 75.003906 16.390625 70.164062 9.53125 62.476562 C 9.410156 57.847656 12.496094 47.113281 28.226562 43.8125 C 30.917969 46.558594 34.230469 48.109375 37.503906 48.109375 C 40.773438 48.109375 44.082031 46.558594 46.773438 43.8125 C 62.507812 47.113281 65.589844 57.847656 65.476562 62.476562" fill-opacity="1" fill-rule="nonzero"></path>
                </svg>
            `;
            systemProfileImage.replaceWith(svgElement.firstElementChild);
        } else {
            systemProfileImage.src = userProfileImage;
        }
    }
});
