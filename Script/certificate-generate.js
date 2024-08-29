class CertificateGenerator {
    constructor() {
        this.scale = 2;
        this.canvas = document.getElementById('certificateCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.templates = {
            "1": { src: 'Image/Template/Easy-Certificate-Template.png', level: "Easy" },
            "2": { src: 'Image/Template/Medium-Certificate-Template.png', level: "Medium" },
            "3": { src: 'Image/Template/Hard-Certificate-Template.png', level: "Hard" },
            "4": { src: 'Image/Template/Insane-Certificate-Template.png', level: "Insane" }
        };
    }

    getNameInput() {
        return document.getElementById('name').value.trim().toUpperCase();
    }

    getSelectedTemplate() {
        const selectedButton = getSelectedLevel();
        return this.templates[selectedButton];
    }

    getSelectedLanguage() {
        const languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"];
        return languageOptions[getSelectedLanguage()] || "C";
    }

    getFormattedDate() {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date().toLocaleDateString('en-GB', options);
    }

    closeForm() {
        document.getElementById('sp').classList.add("hidden");
    }

    configureCanvas() {
        this.canvas.width = 800 * this.scale;
        this.canvas.height = 600 * this.scale;
        this.ctx.scale(this.scale, this.scale);
    }

    drawCertificate(template, nameInput, selectedLanguage, formattedDate) {
        const img = new Image();
        img.src = template.src;

        img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale);

            this.ctx.font = '700 55px Montserrat';
            this.ctx.fillStyle = 'white';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(nameInput, this.canvas.width / (2 * this.scale), 320);

            this.ctx.font = '500 15px Montserrat';
            this.ctx.fillText('For successfully completing all exercises for', this.canvas.width / (2 * this.scale), 370);
            this.ctx.fillText(`the ${template.level} Level in ${selectedLanguage}`, this.canvas.width / (2 * this.scale), 390);

            this.ctx.font = '500 19px Montserrat';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(formattedDate, this.canvas.width / (1.16 * this.scale), 495);

            const certificateImage = this.canvas.toDataURL('image/png', 1.0);
            localStorage.setItem(`savedCertificate_${language}_${level}`, certificateImage);

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [this.canvas.width / this.scale, this.canvas.height / this.scale]
            });

            pdf.addImage(certificateImage, 'PNG', 0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale);
            pdf.save('certificate.pdf');

            this.closeForm();
        };
    }


    generate() {
        const nameInput = this.getNameInput();
        if (nameInput === "") {
            alert("Please enter a valid name.");
            return;
        }

        const template = this.getSelectedTemplate();
        if (!template) {
            alert("Please select a valid level.");
            return;
        }

        const selectedLanguage = this.getSelectedLanguage();
        const formattedDate = this.getFormattedDate();

        if (localStorage.getItem(`savedCertificate_${getSelectedLanguage()}_${getSelectedLevel()}`) === null) {
            this.configureCanvas();
            this.drawCertificate(template, nameInput, selectedLanguage, formattedDate);
        } else {
            alert("Your certificate has already been issued, and reissuing it is not allowed.");
            this.closeForm();
        }
    }
}

const certificateGenerator = new CertificateGenerator();
document.getElementById('certificateGenerationButton').addEventListener('click', () => {
    certificateGenerator.generate();
});
