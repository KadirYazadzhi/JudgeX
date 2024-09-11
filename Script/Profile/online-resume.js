// Function to save content to localStorage
function saveContent() {
    document.querySelectorAll('[contenteditable="true"]').forEach((editable, index) => {
        localStorage.setItem(`editableContent${index}`, editable.innerHTML);
    });
}

// Function to load content from localStorage
function loadContent() {
    document.querySelectorAll('[contenteditable="true"]').forEach((editable, index) => {
        const savedContent = localStorage.getItem(`editableContent${index}`);
        if (savedContent) {
            editable.innerHTML = savedContent;
        }
    });
}

// Add event listener to insert icon on Enter
function handleEnterKey(editable) {
    editable.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();

            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            // Create a new div element to ensure new line
            const newDiv = document.createElement('div');
            newDiv.classList.add("special-div-new-element");
            const iconElement = document.createElement('i');

            // Insert the corresponding icon depending on the section
            if (editable.classList.contains("resume-course-box")) {
                iconElement.classList.add('fa-solid', 'fa-laptop-code', 'icon');
            } else if (editable.classList.contains("resume-work-experience-box")) {
                iconElement.classList.add('fa-solid', 'fa-briefcase', 'icon');
            } else if (editable.classList.contains("resume-certifications-box")) {
                iconElement.classList.add('fa-solid', 'fa-award', 'icon');
            } else {
                iconElement.classList.add('fa-solid', 'fa-pencil', 'icon'); // Default icon
            }

            // Append the icon to the new div
            newDiv.appendChild(iconElement);

            // Insert a text node inside the div
            const textNode = document.createTextNode(' Write your text here.'); // You can leave this empty or add a placeholder text
            newDiv.appendChild(textNode);

            // Insert the new div at the current cursor position
            range.insertNode(newDiv);

            // Move the caret after the inserted node
            range.setStartAfter(newDiv);
            range.setEndAfter(newDiv);
            selection.removeAllRanges();
            selection.addRange(range);

            // Save content after the icon is inserted
            saveContent();
        }
    });
}

// Apply the logic to all contenteditable elements
document.querySelectorAll('[contenteditable="true"]').forEach(editable => {
    editable.addEventListener('input', saveContent);
    handleEnterKey(editable);
});

// Load saved content on page load
window.addEventListener('DOMContentLoaded', loadContent);
