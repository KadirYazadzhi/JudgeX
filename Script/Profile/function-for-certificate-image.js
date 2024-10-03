class ImageHandler {
    constructor(imageSelector, expandButtonSelector, downloadButtonSelector, fullscreenContainerSelector, closeButtonSelector) {
        this.imageElement = document.querySelector(imageSelector);
        this.expandButton = document.querySelector(expandButtonSelector);
        this.downloadButton = document.querySelector(downloadButtonSelector);
        this.fullscreenContainer = document.querySelector(fullscreenContainerSelector);
        this.fullscreenImage = document.querySelector(`${fullscreenContainerSelector} img`);
        this.closeButton = document.querySelector(closeButtonSelector);

        // Attach event listeners
        this.expandButton.addEventListener('click', () => this.openFullscreen());
        this.closeButton.addEventListener('click', () => this.closeFullscreen());
        this.downloadButton.addEventListener('click', () => this.convertImageToPDF());
    }

    // Method to open the image in fullscreen
    openFullscreen() {
        this.fullscreenImage.src = this.imageElement.src;
        this.fullscreenContainer.style.display = 'flex';
    }

    // Method to close the fullscreen modal
    closeFullscreen() {
        this.fullscreenContainer.style.display = 'none';
    }

    // Method to convert the image to PDF
    convertImageToPDF() {
        const imgSrc = this.imageElement.src;
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imgSrc;

        img.onload = () => {
            const { jsPDF } = window.jspdf;

            // Convert image size from px to mm
            const imgWidth = img.width * 0.264583;
            const imgHeight = img.height * 0.264583;

            // Create PDF with image dimensions
            const pdf = new jsPDF({
                orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
                unit: 'mm',
                format: [imgWidth, imgHeight]
            });

            // Add the image to the PDF and download
            pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
            pdf.save("certificate.pdf");
        };

        img.onerror = () => {
            alert("The image could not be loaded!");
        };
    }
}

// Initialize the ImageHandler class when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    new ImageHandler(
        '.users-certificate-img',    // Image selector
        '.fa-expand',                // Expand button selector
        '.fa-file-arrow-down',       // Download button selector
        '#fullscreenContainer',      // Fullscreen container selector
        '#closeBtn'                  // Close button selector
    );
});