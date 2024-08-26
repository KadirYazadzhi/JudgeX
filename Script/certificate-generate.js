function generateCertificate() {
    const nameInput = getNameInput();
    if (!isValidName(nameInput)) return;

    const template = getTemplate();
    if (!template) return;

    const selectedLanguage = getSelectedLanguage();
    const formattedDate = getFormattedDate();

    // Check if the certificate was already issued
    if (!isCertificateAlreadyIssued()) {
        setupCanvas();
        generateImage(template, nameInput, selectedLanguage, formattedDate);
    } else {
        alert("Your certificate has already been issued, and reissuing it is not allowed.");
    }

    // Hide spinner once the process is complete
    hideSpinner();
}

// Get and trim the user input for the name
function getNameInput() {
    return document.getElementById('name').value.trim().toUpperCase();
}

// Validate that the name is not empty
function isValidName(nameInput) {
    if (nameInput === "") {
        alert("Please enter a valid name.");
        return false;
    }
    return true;
}

// Retrieve the selected certificate template based on user input
function getTemplate() {
    const templates = {
        "1": { src: 'Image/Template/Easy-Certificate-Template.png', level: "Easy" },
        "2": { src: 'Image/Template/Medium-Certificate-Template.png', level: "Medium" },
        "3": { src: 'Image/Template/Hard-Certificate-Template.png', level: "Hard" },
        "4": { src: 'Image/Template/Insane-Certificate-Template.png', level: "Insane" }
    };

    const selectedButton = localStorage.getItem('selectedButton');
    const template = templates[selectedButton];

    if (!template) {
        alert("Please select a valid level.");
        return null;
    }

    return template;
}

// Retrieve the selected programming language based on user choice
function getSelectedLanguage() {
    const languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"];
    return languageOptions[localStorage.getItem('selectedCardIndex')] || "C";
}

// Get the current date formatted as 'dd-MMM-yyyy'
function getFormattedDate() {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options);
}

// Check if the certificate has already been issued and saved in localStorage
function isCertificateAlreadyIssued() {
    return localStorage.getItem(`savedCertificate_${language}_${level}`) !== null;
}

// Set up the canvas dimensions and scaling
function setupCanvas() {
    const canvas = document.getElementById('certificateCanvas');
    const scale = 2;

    canvas.width = 800 * scale;
    canvas.height = 600 * scale;

    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
}

// Generate the certificate image and save it as both an image and PDF
function generateImage(template, nameInput, selectedLanguage, formattedDate) {
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    const scale = 2;

    const img = new Image();
    img.src = template.src;

    img.onload = function() {
        // Draw template image on the canvas
        ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);

        // Add text to the canvas
        drawText(ctx, nameInput, selectedLanguage, template.level, formattedDate);

        // Save the certificate as an image and store it in localStorage
        const certificateImage = canvas.toDataURL('image/png', 1.0);
        saveCertificate(certificateImage);

        // Generate a PDF version of the certificate
        generatePDF(certificateImage);
    };
}

// Add the required text (name, level, language, date) to the certificate
function drawText(ctx, nameInput, selectedLanguage, level, formattedDate) {
    ctx.font = '700 55px Montserrat';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(nameInput, 400, 320); // Centered at width / 2

    ctx.font = '500 15px Montserrat';
    ctx.fillText('For successfully completing all exercises for', 400, 370);
    ctx.fillText(`the ${level} Level in ${selectedLanguage}`, 400, 390);

    ctx.font = '500 19px Montserrat';
    ctx.textAlign = 'right';
    ctx.fillText(formattedDate, 690, 495);
}

// Save the generated certificate image to localStorage
function saveCertificate(certificateImage) {
    localStorage.setItem(`savedCertificate_${language}_${level}`, certificateImage);
}

// Generate and download the certificate as a PDF file
function generatePDF(certificateImage) {
    const canvas = document.getElementById('certificateCanvas');
    const { jsPDF } = window.jspdf;
    const scale = 2;

    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width / scale, canvas.height / scale]
    });

    pdf.addImage(certificateImage, 'PNG', 0, 0, canvas.width / scale, canvas.height / scale);
    pdf.save('certificate.pdf');
}

// Hide the spinner (loading indicator)
function hideSpinner() {
    document.getElementById('sp').classList.add("hidden");
}

// Event listener for the certificate generation button
const activateButton = document.getElementById('certificateGenerationButton');
activateButton.addEventListener('click', generateCertificate);

