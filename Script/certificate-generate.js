
function generateCertificate() {
    const nameInput = document.getElementById('name').value.trim().toUpperCase();
    if (nameInput === "") {
        alert("Please enter a valid name.");
        return;
    }

    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    const scale = 2;

    canvas.width = 800 * scale;
    canvas.height = 600 * scale;
    ctx.scale(scale, scale);

    const img = new Image();

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
        return;
    }

    img.src = template.src;

    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);

        ctx.font = '700 55px Montserrat';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(nameInput, canvas.width / (2 * scale), 320);

        const languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"];
        const selectedLanguage = languageOptions[localStorage.getItem('selectedCardIndex')] || "C";

        ctx.font = '500 15px Montserrat';
        ctx.fillText('For successfully completing all exercises for', canvas.width / (2 * scale), 370);
        ctx.fillText(`the ${template.level} Level in ${selectedLanguage}`, canvas.width / (2 * scale), 390);

        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = new Date().toLocaleDateString('en-GB', options);

        ctx.font = '500 19px Montserrat';
        ctx.textAlign = 'right';
        ctx.fillText(formattedDate, canvas.width / (1.16 * scale), 495);

        const certificateImage = canvas.toDataURL('image/png', 1.0);
        localStorage.setItem(`savedCertificate_${language}_${selectedLevel}`, certificateImage);

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvas.width / scale, canvas.height / scale]
        });

        pdf.addImage(certificateImage, 'PNG', 0, 0, canvas.width / scale, canvas.height / scale);
        pdf.save('certificate.pdf');

        document.getElementById('sp').classList.add("hidden");
    };
}