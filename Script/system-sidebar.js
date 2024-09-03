// Class to control the sidebar behavior
class SidebarController {
    constructor(backgroundSidebar, navToggle) {
        // Initialize properties
        this.backgroundSidebar = backgroundSidebar;
        this.navToggle = navToggle;
        this.init();
    }

    init() {
        // Add event listener to toggle the sidebar when the navToggle is clicked
        this.navToggle.addEventListener('click', (event) => this.toggleSidebar(event));
    }

    toggleSidebar(event) {
        // Prevent toggling when clicking on elements with the 'icon' class
        if (event.target.closest('.icon')) {
            event.stopPropagation();
            return;
        }
        // Toggle the sidebar visibility
        this.backgroundSidebar.classList.toggle("hidden");
    }
}

// Static methods to handle various actions
class ActionHandler {
    static deleteMessageConfirm(event) {
        // Prevent event bubbling
        event.stopPropagation();
        // Show a confirmation dialog for deleting all data
        const confirmation = confirm(
            "Are you sure you want to delete all your data from the website? " +
            "This includes your profile, achievements, and all information related to you."
        );
        if (confirmation) {
            // Clear local storage if confirmed
            localStorage.clear();
        }
    }

    static navigateToGithubProject(event) {
        event.stopPropagation();
        // Navigate to the GitHub project page
        window.location.href = "https://github.com/KadirYazadzhi/JudgeX/";
    }

    static navigateToGithubBugReport(event) {
        event.stopPropagation();
        // Navigate to the GitHub bug report page
        window.location.href = "https://github.com/KadirYazadzhi/JudgeX/issues/new";
    }

    static buyMeACoffee(event) {
        event.stopPropagation();
        // Redirect to a donation or relevant page
        window.location.href = "#";
    }

    static transferData(event, background) {
        event.stopPropagation();
        // Show the transfer data box
        background.classList.remove("hidden");
    }

    static closeModal(event, background) {
        event.stopPropagation();
        // Hide the modal
        background.classList.add("hidden");
    }

    static openModal(event, background) {
        event.stopPropagation();
        // Show the modal
        background.classList.remove("hidden");
    }

    static otherItem(event, item) {
        event.stopPropagation();
        // Toggle the visibility of the other menu
        if (item.classList.contains('show')) {
            item.classList.remove('show');
        } else {
            item.classList.toggle('show');
        }
    }

    static logOut(event) {
        event.stopPropagation();
        const confirmation = confirm(
            "Are you sure you want to log out of your account?"
        );
        if (confirmation) {
            localStorage.removeItem("user-register");
        }
        window.location.href = "index.html";
    }
}

// Class to handle button actions in the navigation bar
class NavButtonController {
    constructor(buttons, transferBox, informationModal, otherMenu) {
        // Initialize properties
        this.buttons = buttons;
        this.transferBox = transferBox;
        this.informationModal = informationModal;
        this.otherMenu = otherMenu;
        this.num = 0;
        this.init();
    }

    init() {
        // Add event listeners to each navigation button
        this.buttons.forEach((button, index) => {
            button.addEventListener('click', (event) => this.handleClick(event, index + 1));
        });
    }

    handleClick(event, state) {
        event.stopPropagation();
        // Handle the click event based on the button's state
        switch (state) {
            case 1:
                ActionHandler.openModal(event, this.informationModal);
                break;
            case 2:
                ActionHandler.deleteMessageConfirm(event);
                break;
            case 3:
                ActionHandler.transferData(event, this.transferBox);
                break;
            case 4:
                ActionHandler.navigateToGithubProject(event);
                break;
            case 5:
                ActionHandler.navigateToGithubBugReport(event);
                break;
            case 6:
                ActionHandler.buyMeACoffee(event);
                break;
            case 7:
                ActionHandler.logOut(event);
                break;
            case 8:
                ActionHandler.otherItem(event, this.otherMenu);
                break;
        }
    }
}

// Main controller to initialize all components and event listeners
class MainController {
    constructor() {
        this.init();
    }

    init() {
        // Select the relevant DOM elements
        const backgroundSidebar = document.querySelector(".background-sidebar");
        const navToggle = document.getElementById('toggle');
        const deleteDataIcon = document.querySelector(".fa-trash");
        const transferDataIcon = document.querySelector(".fa-file-arrow-down");
        const transferBox = document.getElementById('transfer-box');
        const closeModal = document.querySelector(".closeTranslate");
        const githubIcon = document.querySelector(".fa-github");
        const bugIcon = document.querySelector(".fa-bug");
        const buyMeACoffeeIcon = document.querySelector(".fa-buymeacoffee");
        const navButtons = document.querySelectorAll(".nav-button");
        const informationModal = document.getElementById('information');
        const informationIcon = document.querySelector(".fa-circle-info");
        const informationModalClose = document.querySelector(".closeInformationModal");
        const otherIcon = document.querySelector(".fa-ellipsis");
        const otherMenu = document.querySelector(".other-modal");
        const logOutIcon = document.querySelector(".fa-right-from-bracket");

        // Initialize SidebarController
        new SidebarController(backgroundSidebar, navToggle);

        // Add click event listeners to various icons
        deleteDataIcon.addEventListener('click', (event) => ActionHandler.deleteMessageConfirm(event));
        githubIcon.addEventListener('click', (event) => ActionHandler.navigateToGithubProject(event));
        bugIcon.addEventListener('click', (event) => ActionHandler.navigateToGithubBugReport(event));
        buyMeACoffeeIcon.addEventListener('click', (event) => ActionHandler.buyMeACoffee(event));
        transferDataIcon.addEventListener('click', (event) => ActionHandler.transferData(event, transferBox));
        closeModal.addEventListener('click', (event) => ActionHandler.closeModal(event, transferBox));
        informationIcon.addEventListener('click', (event) => ActionHandler.openModal(event, informationModal));
        informationModalClose.addEventListener('click', (event) => ActionHandler.closeModal(event, informationModal));
        otherIcon.addEventListener('click', (event) => ActionHandler.otherItem(event, otherMenu));
        logOutIcon.addEventListener('click', (event) => ActionHandler.logOut(event));

        // Initialize NavButtonController for navigation buttons
        new NavButtonController(navButtons, transferBox, informationModal, otherMenu);
    }
}

// Initialize the main controller when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new MainController();
});
