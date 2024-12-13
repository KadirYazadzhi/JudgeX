class ResponsiveLinks {
    constructor() {
        this.specialLink = document.getElementById('specialLink');
        this.specialScript = document.getElementById('specialScript');
        this.originalLinkHref = 'https://unpkg.com/swiper/swiper-bundle.min.css';
        this.originalScriptSrc = 'https://unpkg.com/swiper/swiper-bundle.min.js';
        this.checkWidthAndUpdateLinks();

        window.addEventListener('resize', () => this.checkWidthAndUpdateLinks());
    }

    checkWidthAndUpdateLinks() {
        if (window.innerWidth < 768) {
            this.specialLink.href = this.originalLinkHref;
            this.specialScript.src = this.originalScriptSrc;
        } else {
            this.specialLink.href = '';
            this.specialScript.src = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ResponsiveLinks();
});