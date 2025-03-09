// Main class responsible for generating and handling the submission table
class SubmissionTable {
    constructor() {
        // Keys to access submission and results data in localStorage (specific to the active task, language, and level)
        this.baseKey = `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        this.resultKey = `taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;

        // Retrieve the count of submissions or default to 0
        this.index = parseInt(localStorage.getItem(`${this.baseKey}_index`), 10) || 0;
    }

    updateKeys() {
        this.baseKey = `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        this.resultKey = `taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        this.index = parseInt(localStorage.getItem(`${this.baseKey}_index`), 10) || 0;
    }

    // Generates the submission table based on the stored submissions
    generateTable() {
        this.updateKeys();
        this.resetSubmissionList(); // Clear any existing data in the submission table

        // If no submissions exist, show a "No results" message and exit
        if (this.index <= 0) {
            this.showNoResultsMessage();
            return;
        }

        // Generate a new submission element for each submission stored in localStorage
        for (let i = 0; i < this.index; i++) {
            new SubmissionElement(i, this.baseKey, this.resultKey).create();
        }
    }

    // Clears the current content of the table
    resetSubmissionList() {
        document.getElementById("submission-list").innerHTML = "";
    }

    // Displays a friendly message when no submissions are available
    showNoResultsMessage() {
        const submissionList = document.getElementById("submission-list");
        const noResultsRow = document.createElement("div");
        noResultsRow.classList.add("no-results-message");
        noResultsRow.innerHTML = `
            <div class="table-element no-results">
                <p>No submissions available for this task.</p>
            </div>
        `;
        submissionList.appendChild(noResultsRow);
    }
}

// Represents a single submission, handles the creation and representation of its details
class SubmissionElement {
    constructor(index, baseKey, resultKey) {
        this.index = index; // Submission index for reference
        this.baseKey = baseKey; // Key to retrieve submission data
        this.resultKey = resultKey; // Key to retrieve results data
        this.submissionList = document.getElementById("submission-list"); // The table/list where submissions are displayed
    }

    // Creates a single submission row in the table
    create() {
        const rawCodeData = localStorage.getItem(`${this.baseKey}_${this.index}`); // Code for this submission
        const rawResultData = localStorage.getItem(`${this.resultKey}_${this.index}`); // Results for this submission

        // If submission data is missing, log an error and return
        if (!rawCodeData) {
            console.error(`Missing code data for index ${this.index}`);
            return;
        }

        let resultData;
        try {
            // Parse results or use default if parsing fails
            resultData = rawResultData ? JSON.parse(rawResultData) : { time: "Unknown time", testResults: "" };
        } catch (error) {
            console.error(`Error parsing resultData for index ${this.index}:`, error);
            resultData = { time: "Unknown time", testResults: "" }; // Default data in case of parsing error
        }

        // Add the submission row to the table
        this.appendRow(resultData.time, resultData.testResults);
    }

    // Appends a row with submission details to the table
    appendRow(time, testResults) {
        const newRow = document.createElement("div");
        newRow.classList.add("submission-table");
        newRow.innerHTML = `
            <div class="table-element number">
                <p>${this.index + 1}</p>
            </div>
            <div class="table-element results">
                ${ResultIcons.create(testResults)} <!-- Generates icons for the test results -->
            </div>
            <div class="table-element submission-time">
                <p>${time}</p>
            </div>
            <div class="table-element details-btn">
                <button onclick="SubmissionElement.showDetails(${this.index})">Details</button>
            </div>
        `;
        this.submissionList.appendChild(newRow); // Attach the new row to the table
    }

    // Displays details of a specific submission in a modal popup
    static showDetails(index) {
        const baseKey = `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        const resultKey = `taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        const rawSubmissionData = localStorage.getItem(`${baseKey}_${index}`);
        const rawResultData = localStorage.getItem(`${resultKey}_${index}`);

        // If submission data is missing, show an alert and log an error
        if (!rawSubmissionData) {
            console.error(`Details for submission index ${index} not found.`);
            alert("No details available for the selected submission.");
            return;
        }

        let submissionData = rawSubmissionData; // Load submission data
        let resultData = { testResults: "" }; // Default results if none exist

        if (rawResultData) {
            try {
                // Parse the results data
                resultData = JSON.parse(rawResultData);
            } catch (error) {
                console.error("Error parsing result data:", error);
                alert("The result data is corrupted or invalid.");
                return;
            }
        }

        // Normalize results data for proper handling
        const normalizedResults = Array.isArray(resultData.testResults)
            ? resultData.testResults
            : resultData.testResults.split("").map(res => res.trim());

        // Create the modal overlay
        const modalOverlay = document.createElement("div");
        modalOverlay.classList.add("modal-overlay");

        // Allow closing the modal by clicking outside of the modal's content
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                document.body.removeChild(modalOverlay);
            }
        });

        const modalContent = document.createElement("div"); // Modal content container
        modalContent.classList.add("modal-content");

        const closeIcon = document.createElement("div"); // Close button
        closeIcon.classList.add("modal-close-icon");
        closeIcon.innerHTML = "&times;";
        closeIcon.onclick = () => {
            document.body.removeChild(modalOverlay);
        };

        // Modal title
        const modalTitle = document.createElement("h2");
        modalTitle.innerText = "Submission Results";

        // Container for test results
        const testResultsContainer = document.createElement("div");
        testResultsContainer.classList.add("test-results-container");

        // Generate cards for each test result
        for (let i = 0; i < 6; i++) {
            const testCard = document.createElement("div");
            testCard.classList.add("test-result-card");

            if (normalizedResults[i] === "1") {
                testCard.classList.add("test-passed");
                testCard.innerText = `Test ${i + 1}: Passed`;
            } else if (normalizedResults[i] === "0") {
                testCard.classList.add("test-failed");
                testCard.innerText = `Test ${i + 1}: Failed`;
            } else {
                testCard.classList.add("test-unknown");
                testCard.innerText = `Test ${i + 1}: Unknown`;
            }

            testResultsContainer.appendChild(testCard);
        }

        // Container for submission code
        const codeBlockContainer = document.createElement("div");
        codeBlockContainer.classList.add("code-block-container");

        const codeBlockTitle = document.createElement("h2");
        codeBlockTitle.innerText = "Submission Code";

        const codeBlock = document.createElement("pre"); // Display the raw code
        codeBlock.classList.add("code-block");
        codeBlock.innerText = submissionData;

        codeBlockContainer.appendChild(codeBlockTitle);
        codeBlockContainer.appendChild(codeBlock);

        // Append all components to the modal
        modalContent.appendChild(closeIcon);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(testResultsContainer);
        modalContent.appendChild(codeBlockContainer);

        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
    }
}

// Utility class for creating icons for test results
class ResultIcons {
    static create(testResults) {
        if (!testResults || testResults.length === 0) {
            return `<div class="result">${'<i class="fa-solid fa-minus" style="color: #5e5e5e;"></i>'.repeat(6)} No results</div>`;
        }

        const totalTests = testResults.length;
        const pointsPerTest = 100 / totalTests;
        const passed = [...testResults].filter(res => res === "1").length;
        const score = Math.round(passed * pointsPerTest);

        return `<div class="result">${[...testResults].map(res => res === "1"
            ? '<i class="fa-solid fa-check" style="color: green;"></i>'
            : '<i class="fa-solid fa-xmark" style="color: red;"></i>'
        ).join('')} ${score}/100</div>`;
    }
}

// Initialize the table when the page is fully loaded
window.onload = () => new SubmissionTable().generateTable();

// Hook refresh buttons to regenerate the table
document.getElementById("refresh-one").onclick = () => new SubmissionTable().generateTable();
document.getElementById("refresh-two").onclick = () => new SubmissionTable().generateTable();