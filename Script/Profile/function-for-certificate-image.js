document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.querySelector('.fa-file-arrow-down');
    const certificateImage = document.querySelector('.users-certificate-img');

    downloadButton.addEventListener('click', function() {
        const imgSrc = certificateImage.src;
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imgSrc;

        img.onload = function() {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();

            const imgWidth = 210;
            const imgHeight = (img.height * imgWidth) / img.width;
            pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);

            pdf.save("certificate.pdf");
        };

        img.onerror = function() {
            alert("");
        };
    });
});