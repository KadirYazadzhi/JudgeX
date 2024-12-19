class CertificateManager {
    constructor() {
        this.sum = 0;  // Counter for completed tasks
        this.excludedIndices = [11, 13, 15, 17, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 71, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92]; // Indices of tasks to be excluded from counting
        this.buttonToViewCertificate = document.querySelector(".certificateBtn"); // Button to view certificate
        this.startNumber = null; // Starting number for task range
        this.endNumber = null; // Ending number for task range
        this.compare = 15; // Threshold for the number of completed tasks to show certificate
        this.PriceToGenerateCertificate = { "Easy": 50, "Medium": 150, "Hard": 250, "Insane": 500 };
        this.languageOptions = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Ruby", "Go"]; // Options for programming languages
        this.difficultyLevels = ["Easy", "Medium", "Hard", "Insane"]; // Options for difficulty levels
        this.selectedLanguage = this.languageOptions[getSelectedLanguage()] || "C"; // Get the selected language
        this.selectedButton = this.difficultyLevels[getSelectedLevel() - 1] || "Insane"; // Get the selected difficulty level
        this.initialize(); // Initialize the certificate manager
    }

    // Initializes the task range, calculates completed tasks, and checks certificate eligibility
    initialize() {
        this.setTaskRange(); // Set the range of tasks based on the selected level
        this.calculateSum(); // Calculate the number of completed tasks
        this.checkCertificateEligibility(); // Check if the user is eligible for a certificate
    }

    // Sets the range of tasks based on the selected difficulty level
    setTaskRange() {
        switch (getSelectedLevel()) {
            case "1":
                this.startNumber = 1;
                this.endNumber = 19;
                break;
            case "2":
                this.startNumber = 20;
                this.endNumber = 47;
                break;
            case "3":
                this.startNumber = 48;
                this.endNumber = 73;
                break;
            case "4":
                this.startNumber = 75;
                this.endNumber = 93;
                this.compare = 10; // Adjust the threshold for level 4
                break;
            default:
                console.warn("Invalid level selected"); // Log a warning if the level is invalid
        }
    }

    // Calculates the number of completed tasks, excluding certain indices
    calculateSum() {
        for (let i = this.startNumber; i <= this.endNumber; i++) {
            // Check if the task is not excluded and has the expected result
            if (!this.excludedIndices.includes(i) &&
                localStorage.getItem(`taskResult_${i}_${getSelectedLanguage()}_${getSelectedLevel()}`) === "111111") {
                this.sum++; // Increment the count of completed tasks
            }
        }
    }

    // Method to get the current amount of diamonds
    getDiamonds() {
        return parseInt(localStorage.getItem('diamond_availability') || '0', 10);
    }

    // Displays a message box with certificate details
    showCertificateMessageBox() {
        const hiddenElement = document.getElementById('sp'); // Get the element for the message box
        hiddenElement.classList.remove("hidden"); // Remove the 'hidden' class to show the element
        hiddenElement.style.display = 'flex'; // Set display style to 'flex'

        // Update the subtitle text with certificate details
        document.getElementById('subtitle-text').innerHTML =
            `You have successfully solved all the problems for the ${this.selectedButton} level in ${this.selectedLanguage}. ` +
            `The price to generate this certificate is ${this.PriceToGenerateCertificate[this.selectedButton]} diamonds.`;
    }

    checkUserHaveDiamondsToGenerateCertificate() {
        if (this.getDiamonds() < this.PriceToGenerateCertificate[this.selectedButton]) {
            localStorage.setItem("message-to-generate-certificate", "True");
            return false;
        }

        localStorage.setItem("message-to-generate-certificate", "False");
        return true;
    }

    getCertificateMessageStatus() {
        return localStorage.getItem("message-to-generate-certificate").toString();
    }

    // Checks if the user is eligible for a certificate and updates the certificate button visibility
    checkCertificateEligibility() {
        if (!this.checkUserHaveDiamondsToGenerateCertificate() && this.getCertificateMessageStatus() == "False") {
            alert("You don't have enough diamonds to generate this certificate.");
            return;
        }

        localStorage.setItem('diamond_availability', "100000")

        if (this.getCertificateMessageStatus() == "True") return;

        if (this.sum >= this.compare || getSavedCertificate() !== null) { // Check if the number of completed tasks meets the threshold
            // Check if the certificate needs to be shown
            if (getTakeCertificate() === null && getSavedCertificate() === null) {
                this.showCertificateMessageBox(); // Show the message box if no certificate exists
            } else if (getSavedCertificate() === null) {
                this.showCertificateMessageBox(); // Show the message box if the certificate is not saved
            } else {
                // Show the certificate button if the certificate is already saved
                if (getSavedCertificate() !== null) {
                    this.buttonToViewCertificate.classList.remove("hidden");
                }
            }

            // Update localStorage to indicate that the user is taking a certificate
            localStorage.setItem(`Take_Certificate_${getSelectedLanguage()}_${getSelectedLevel()}`, "True");
        }
    }
}

// Initialize CertificateManager when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new CertificateManager();
});









