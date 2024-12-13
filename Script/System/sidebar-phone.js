class Sidebar {
    constructor() {
        this.sidebar = document.getElementById('nav-bar');
        this.navHeader = document.getElementById('nav-header');
        this.sidebarContent = document.getElementById('nav-content');
        this.navFooter = document.getElementById('nav-footer');
        this.toggle = document.getElementById('toggle');
        this.scrollPosition = 0;
        this.container = document.querySelector(".container");

        this.init();
    }

    init() {
        if (window.innerWidth < 768) {
            this.setupInitialStyles();

            this.toggle.addEventListener('click', () => this.toggleSidebar());
        }
    }

    setupInitialStyles() {
        if (window.innerWidth < 600) {
            this.setMobileStyles();
        }
    }

    setMobileStyles() {
        this.sidebar.style.background = "transparent";
        this.sidebar.style.flexDirection = "row";
        this.sidebarContent.classList.add("hidden");
        this.sidebarContent.style.background = "transparent";
        this.navHeader.style.background = "transparent";
        this.sidebarContent.style.boxShadow = "none";
        this.navFooter.classList.add("hidden");
    }

    disableScroll() {
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
    }

    enableScroll() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, this.scrollPosition);
    }

    toggleSidebar() {
        if (this.sidebarContent.classList.contains("hidden")) {
            this.showSidebar();
        } else {
            this.hideSidebar();
        }
    }

    showSidebar() {
        this.sidebarContent.classList.remove("hidden");
        this.navFooter.classList.remove("hidden");
        this.sidebar.style.flexDirection = "column";
        this.sidebar.style.position = "absolute";
        this.sidebar.style.background = "#232F46FF";
        this.sidebarContent.style.background = "#232F46FF";
        this.navHeader.style.background = "#232F46FF";
        this.sidebarContent.style.boxShadow = "0 0 0 16px #232F46FF";
        this.sidebar.style.maxHeight = '90%'
        this.sidebar.style.marginTop = '0'
        this.disableScroll();
    }

    hideSidebar() {
        this.sidebarContent.classList.add("hidden");
        this.navFooter.classList.add("hidden");
        this.sidebar.style.flexDirection = "row";
        this.sidebar.style.background = "transparent";
        this.sidebarContent.style.background = "transparent";
        this.navHeader.style.background = "transparent";
        this.sidebarContent.style.boxShadow = "none";
        this.sidebar.style.maxHeight = '8%'
        this.enableScroll();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Sidebar();
});
