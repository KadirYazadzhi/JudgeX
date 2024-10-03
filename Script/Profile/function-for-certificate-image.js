class ImageToPDFConverter {
    constructor(imageSelector, downloadButtonSelector) {
        // Select the image and button elements
        this.imageElement = document.querySelector(imageSelector);
        this.downloadButton = document.querySelector(downloadButtonSelector);

        // Attach event listener to the download button
        this.downloadButton.addEventListener('click', () => this.convertImageToPDF());
    }

    // Method to convert the image to PDF
    convertImageToPDF() {
        const imgSrc = this.imageElement.src;
        const img = new Image();
        img.crossOrigin = "Anonymous"; // Avoid CORS issues
        img.src = imgSrc;

        // When the image loads, create the PDF
        img.onload = () => {
            const { jsPDF } = window.jspdf;

            // Convert image size from px to mm (1px = 0.264583mm)
            const imgWidth = img.width * 0.264583;
            const imgHeight = img.height * 0.264583;

            // Create the PDF with the dimensions of the image
            const pdf = new jsPDF({
                orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
                unit: 'mm',
                format: [imgWidth, imgHeight]
            });

            // Add the image to the PDF document
            pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);

            // Save the PDF
            pdf.save("certificate.pdf");
        };

        // Handle any errors in loading the image
        img.onerror = () => {
            alert("The image could not be loaded!");
        };
    }
}

// Initialize the ImageToPDFConverter class when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    new ImageToPDFConverter('.users-certificate-img', '.fa-file-arrow-down');
});