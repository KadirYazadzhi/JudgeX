class SubmissionTable {
    constructor() {
        this.baseKey = `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        this.resultKey = `taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        this.index = parseInt(localStorage.getItem(`${this.baseKey}_index`), 10) || 0;
    }

    generateTable() {
        this.resetSubmissionList();

        if (this.index <= 0) {
            this.showNoResultsMessage();
            return;
        }

        for (let i = 0; i < this.index; i++) {
            new SubmissionElement(i, this.baseKey, this.resultKey).create();
        }
    }

    resetSubmissionList() {
        document.getElementById("submission-list").innerHTML = "";
    }

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

class SubmissionElement {
    constructor(index, baseKey, resultKey) {
        this.index = index;
        this.baseKey = baseKey;
        this.resultKey = resultKey;
        this.submissionList = document.getElementById("submission-list");
    }

    create() {
        const rawCodeData = localStorage.getItem(`${this.baseKey}_${this.index}`);
        const rawResultData = localStorage.getItem(`${this.resultKey}_${this.index}`);

        if (!rawCodeData) {
            console.error(`Missing code data for index ${this.index}`);
            return;
        }

        let resultData;
        try {
            resultData = rawResultData ? JSON.parse(rawResultData) : { time: "Unknown time", testResults: "" };
        } catch (error) {
            console.error(`Error parsing resultData for index ${this.index}:`, error);
            resultData = { time: "Unknown time", testResults: "" }; // Set default if parsing fails
        }

        this.appendRow(resultData.time, resultData.testResults);
    }

    appendRow(time, testResults) {
        const newRow = document.createElement("div");
        newRow.classList.add("submission-table");
        newRow.innerHTML = `
            <div class="table-element number">
                <p>${this.index + 1}</p>
            </div>
            <div class="table-element results">
                ${ResultIcons.create(testResults)}
            </div>
            <div class="table-element submission-time">
                <p>${time}</p>
            </div>
            <div class="table-element details-btn">
                <button onclick="SubmissionElement.showDetails(${this.index})">Details</button>
            </div>
        `;
        this.submissionList.appendChild(newRow);
    }

    static showDetails(index) {
        const baseKey = `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        const resultKey = `taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
        const rawSubmissionData = localStorage.getItem(`${baseKey}_${index}`);
        const rawResultData = localStorage.getItem(`${resultKey}_${index}`);

        if (!rawSubmissionData) {
            console.error(`Details for submission index ${index} not found.`);
            alert("No details available for the selected submission.");
            return;
        }

        let submissionData = rawSubmissionData;
        let resultData = { testResults: "" };

        if (rawResultData) {
            try {
                resultData = JSON.parse(rawResultData);
            } catch (error) {
                console.error("Error parsing result data:", error);
                alert("The result data is corrupted or invalid.");
                return;
            }
        }

        const normalizedResults = Array.isArray(resultData.testResults)
            ? resultData.testResults
            : resultData.testResults.split("").map(res => res.trim());

        const modalOverlay = document.createElement("div");
        modalOverlay.classList.add("modal-overlay");

        // Добавяне на обработка на кликване извън модала
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                document.body.removeChild(modalOverlay);
            }
        });

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const closeIcon = document.createElement("div");
        closeIcon.classList.add("modal-close-icon");
        closeIcon.innerHTML = "&times;";
        closeIcon.onclick = () => {
            document.body.removeChild(modalOverlay);
        };

        const modalTitle = document.createElement("h2");
        modalTitle.innerText = "Submission Results";
        modalContent.appendChild(modalTitle);

        const testResultsContainer = document.createElement("div");
        testResultsContainer.classList.add("test-results-container");

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

        const codeBlockContainer = document.createElement("div");
        codeBlockContainer.classList.add("code-block-container");

        const codeBlockTitle = document.createElement("h2");
        codeBlockTitle.innerText = "Submission Code";

        const codeBlock = document.createElement("pre");
        codeBlock.classList.add("code-block");
        codeBlock.innerText = submissionData;

        codeBlockContainer.appendChild(codeBlockTitle);
        codeBlockContainer.appendChild(codeBlock);

        modalContent.appendChild(closeIcon);
        modalContent.appendChild(testResultsContainer);
        modalContent.appendChild(codeBlockContainer);

        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
    }
}

class ResultIcons {
    static create(testResults) {
        if (!testResults) return "<div class='result'>No results</div>";

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

window.onload = () => new SubmissionTable().generateTable();