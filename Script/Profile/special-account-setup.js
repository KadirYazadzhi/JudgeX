// Function to check if the user is special
function isSpecialUser() {
    return getSpecialUser() !== null;
}

// Function to create and append a special user icon
function addSpecialUserIcon(container) {
    const specialUserIcon = document.createElement('i');
    specialUserIcon.classList.add("fa-solid", "fa-user-secret");
    container.appendChild(specialUserIcon);
}

// Main function to initialize user details
function initializeUserDetails() {
    const userDetailsBox = document.querySelector(".username-profile-box");

    if (isSpecialUser()) {
        addSpecialUserIcon(userDetailsBox);
    }
}

// Initialize user details when the script runs
initializeUserDetails();
