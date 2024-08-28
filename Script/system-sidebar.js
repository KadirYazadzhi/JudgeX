class SidebarController {
    constructor(backgroundSidebar, navToggle) {
        this.backgroundSidebar = backgroundSidebar;
        this.navToggle = navToggle;
        this.init();
    }

    init() {
        this.navToggle.addEventListener('click', (event) => this.toggleSidebar(event));
    }

    toggleSidebar(event) {
        if (event.target.closest('.icon')) {
            event.stopPropagation();
            return;
        }
        this.backgroundSidebar.classList.toggle("hidden");
    }
}

class ActionHandler {
    static deleteMessageConfirm(event) {
        event.stopPropagation();
        const confirmation = confirm(
            "Are you sure you want to delete all your data from the website? " +
            "This includes your profile, achievements, and all information related to you."
        );
        if (confirmation) {
            localStorage.clear();
        }
    }

    static navigateToGithubProject(event) {
        event.stopPropagation();
        window.location.href = "https://github.com/KadirYazadzhi/JudgeX/";
    }

    static navigateToGithubBugReport(event) {
        event.stopPropagation();
        window.location.href = "https://github.com/KadirYazadzhi/JudgeX/issues/new";
    }

    static buyMeACoffee(event) {
        event.stopPropagation();
        window.location.href = "#";
    }

    static transferData(event, background) {
        event.stopPropagation();
        background.classList.remove("hidden");
    }

    static closeModal(event, background) {
        event.stopPropagation();
        background.classList.add("hidden");
    }

    static openModal(event, background) {
        event.stopPropagation();
        background.classList.remove("hidden");
    }
}

class NavButtonController {
    constructor(buttons, transferBox, informationModal) {
        this.buttons = buttons;
        this.transferBox = transferBox;
        this.informationModal = informationModal;
        this.num = 0;
        this.init();
    }

    init() {
        this.buttons.forEach((button, index) => {
            button.addEventListener('click', (event) => this.handleClick(event, index + 1));
        });
    }

    handleClick(event, state) {
        event.stopPropagation();
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
                this.num = 7;
                break;
            case 8:
                this.num = 8;
                break;
        }
    }
}

class MainController {
    constructor() {
        this.init();
    }

    init() {
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

        new SidebarController(backgroundSidebar, navToggle);

        deleteDataIcon.addEventListener('click', (event) => ActionHandler.deleteMessageConfirm(event));
        githubIcon.addEventListener('click', (event) => ActionHandler.navigateToGithubProject(event));
        bugIcon.addEventListener('click', (event) => ActionHandler.navigateToGithubBugReport(event));
        buyMeACoffeeIcon.addEventListener('click', (event) => ActionHandler.buyMeACoffee(event));
        transferDataIcon.addEventListener('click', (event) => ActionHandler.transferData(event, transferBox));
        closeModal.addEventListener('click', (event) => ActionHandler.closeModal(event, transferBox));
        informationIcon.addEventListener('click', (event) => ActionHandler.openModal(event, informationModal));
        informationModalClose.addEventListener('click', (event) => ActionHandler.closeModal(event, informationModal));

        new NavButtonController(navButtons, transferBox, informationModal);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MainController();
});
