class CertificateManager {
    constructor() {
        this.languages = languageOptions;
        this.levels = difficultyLevels;
    }

    // Initialize the certificate generation process
    generateCertificates() {
        for (let i = 0; i < this.languages.length; i++) {
            for (let j = 1; j <= this.levels.length; j++) {
                const path = localStorage.getItem(`savedCertificate_${i}_${j}`);
                if (path !== null) {
                    const certificateLanguage = this.getLanguage(i);
                    const certificateLevel = this.getLevel(j);
                    const messageCertificate = `${certificateLanguage} ${certificateLevel} Level`;

                    // Call function to create and display the certificate
                    this.createCertificateElement(path, messageCertificate);
                }
            }
        }
    }

    // Retrieve language by index
    getLanguage(index) {
        return this.languages[index] || 'Unknown';
    }

    // Retrieve level by index
    getLevel(index) {
        return this.levels[index - 1] || 'Unknown';
    }

    // Create and append a new certificate element to the DOM
    createCertificateElement(path, message) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('certificate-box');

        const container = document.querySelector('.certificate-container');
        container.appendChild(newDiv);

        const newImage = document.createElement('img');
        newImage.classList.add('users-certificate-img');
        newImage.src = path;
        newDiv.appendChild(newImage);

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('certificate-card-bottom-box');
        newDiv.appendChild(containerDiv);

        const newSpan = document.createElement('span');
        containerDiv.appendChild(newSpan);
        newSpan.innerHTML = message;

        const iconsBox = document.createElement('div');
        iconsBox.classList.add('certificate-icons-box');
        containerDiv.appendChild(iconsBox);


        const downloadIcon = document.createElement('i');
        downloadIcon.classList.add('fa-solid', 'fa-file-arrow-down');
        iconsBox.appendChild(downloadIcon);

        const openFullScreenIcon = document.createElement('i');
        openFullScreenIcon.classList.add('fa-solid', 'fa-expand');
        iconsBox.appendChild(openFullScreenIcon);
    }
}

// Create an instance of the CertificateManager and generate certificates
document.addEventListener('DOMContentLoaded', () => {
    const certificateManager = new CertificateManager();
    certificateManager.generateCertificates();
});
