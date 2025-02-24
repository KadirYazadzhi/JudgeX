// Main function to generate the submission table
function createSubmissionTable() {
    const baseKey = `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
    const resultKey = `taskResult_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
    let index = parseInt(localStorage.getItem(`${baseKey}_index`), 10);

    // Reset the submission list before adding new elements
    resetSubmissionList();

    if (!index || index <= 0) {
        // If there are no results, display the "no results" message
        showNoResultsMessage();
        return;
    }

    for (let i = 0; i < index; i++) {
        createSubmissionElement(i, baseKey, resultKey);
    }
}

function createSubmissionElement(index, baseKey, resultKey) {
    const submissionList = document.getElementById("submission-list");

    const rawCodeData = localStorage.getItem(`${baseKey}_${index}`);
    const rawResultData = localStorage.getItem(`${resultKey}_${index}`);


    if (!rawCodeData) {
        console.error(`Missing code data for index ${index}`);
        return;
    }

    let codeData = rawCodeData;
    let resultData = null;

    try {
        if (rawResultData) {
            resultData = JSON.parse(rawResultData);
        } else {
            console.warn(`Missing result data for index ${index}, setting default values.`);
            resultData = { time: "Unknown time", testResults: "" };
        }
    } catch (error) {
        console.error(`Error parsing resultData for index ${index}:`, error);
        return;
    }

    const { time = "Unknown time", testResults = "" } = resultData;

    const newRow = document.createElement("div");
    newRow.classList.add("submission-table");

    const resultsMarkup = testResults
        ? `<div class="result">${createResultIcons(testResults)}</div>`
        : `<div class="result">No results</div>`;

    newRow.innerHTML = `
        <div class="table-element number">
            <p>${index + 1}</p>
        </div>
        <div class="table-element results">
            ${resultsMarkup}
        </div>
        <div class="table-element submission-time">
            <p>${time}</p>
        </div>
        <div class="table-element details-btn">
            <button onclick="showCodeDetails(${index})">Details</button>
        </div>
    `;

    submissionList.appendChild(newRow);
}

// Function to display the code in a popup or another place
function showCodeDetails(index) {
    const baseKey = `saveSubmitCode_${getActiveTask()}_${getSelectedLanguage()}_${getSelectedLevel()}`;
    const rawCodeData = localStorage.getItem(`${baseKey}_${index}`);

    alert(`Submission Code:\n\n${rawCodeData}`);
}

// Function to generate the result icons (checkmarks or crosses)
function createResultIcons(testResults) {
    if (!testResults) return "";

    let resultsHtml = "";

    // Loop through results and create icons (1 = success, 0 = failure)
    for (let i = 0; i < testResults.length; i++) {
        if (testResults[i] === "1") {
            resultsHtml += '<i class="fa-solid fa-check" style="color: green;"></i>'; // Green checkmark
        } else {
            resultsHtml += '<i class="fa-solid fa-xmark" style="color: red;"></i>'; // Red cross
        }
    }

    console.log("Generated result icons:", resultsHtml);
    return resultsHtml;
}

// Reset the submission list to clear all previous entries
function resetSubmissionList() {
    const submissionList = document.getElementById("submission-list");
    submissionList.innerHTML = ""; // Clear all child elements of submissionList
}

// Display a message if there are no submissions available
function showNoResultsMessage() {
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

// Automatically load the submissions when the page loads
window.onload = function () {
    createSubmissionTable();
};
