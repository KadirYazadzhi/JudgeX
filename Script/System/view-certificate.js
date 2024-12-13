class CertificateViewer {
    constructor(viewBtnId, imgId, backgroundSelector, closeIconSelector) {
        this.viewCertificateBtn = document.getElementById(viewBtnId);
        this.savedCertificateImg = document.getElementById(imgId);
        this.certificateBackground = document.querySelector(backgroundSelector);
        this.closeBackgroundIcon = document.querySelector(closeIconSelector);

        this.initEventListeners();
    }

    initEventListeners() {
        this.viewCertificateBtn.addEventListener('click', () => this.showCertificate());
        this.certificateBackground.addEventListener('click', () => this.hideCertificate());
        this.closeBackgroundIcon.addEventListener('click', () => this.hideCertificate());
    }

    showCertificate() {
        this.certificateBackground.classList.remove("hidden");
        this.savedCertificateImg.src = getSavedCertificate();
    }

    hideCertificate() {
        this.certificateBackground.classList.add("hidden");
    }
}

const certificateViewer = new CertificateViewer('certificateBtn', 'savedCertificateImg', '.certificate-background', '.certificate-background i');
