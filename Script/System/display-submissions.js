const baseKey = `saveSubmitCode_${20}_${getSelectedLanguage()}_${getSelectedLevel()}`;
let index = parseInt(localStorage.getItem(`${baseKey}_index`) );

console.log(parseInt(localStorage.getItem(`${baseKey}_index`)));

for (let i = 0; i < index / 3; i++) {
    createSubmissionElement();
    console.log(`${index}-${i}`);
}

function createSubmissionElement() {
    const submissionList = document.getElementById("submission-list");
    const newIndex = submissionList.children.length + 1;

    const newRow = document.createElement("div");
    newRow.classList.add("submission-table");

    newRow.innerHTML = `
            <div class="table-element number">
                <p>${newIndex}</p>
            </div>
            <div class="table-element results">
                <div class="result">
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-check"></i>
                    <p>100/100</p>
                </div>
            </div>
            <div class="table-element submission-time">
                <p>${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="table-element details-btn">
                <button>Details</button>
            </div>
    `

    submissionList.appendChild(newRow);
}
