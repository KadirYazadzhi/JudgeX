const navFooterContent = document.getElementById('nav-footer-content');

const elementsToAdd = [
    getDiamonds(),
    getFirstVisitDate(),
    getUserRank(),
    countEarnedCertificate(),
    countSolvedTasks()
]

const elementToAddIcons = [
    "fa-gem",
    "fa-calendar",
    "fa-ranking-star",
    "fa-award",
    "fa-trophy"
]

const elementsText = [
    "Available Diamonds:",
    "Registration Date:",
    "Your Rank:",
    "Certificates Count:",
    "Solved Tasks:"
]

function CreateElementsForFooterContent() {
    for (let element = 0; element < elementsToAdd.length; element++) {
        const box = document.createElement('span');
        box.classList.add('footer-content-element');
        navFooterContent.appendChild(box);

        if (element === 0) {
            // Create the SVG element
            const svgNS = "http://www.w3.org/2000/svg"; // Namespace for SVG
            const svg = document.createElementNS(svgNS, "svg");

            // Set attributes for the SVG element
            svg.setAttribute("xmlns", svgNS);
            svg.setAttribute("viewBox", "0 0 512 512");

            // Create the path element
            const path = document.createElementNS(svgNS, "path");

            // Set the 'd' attribute for the path
            path.setAttribute(
                "d",
                "M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"
            );

            // Append the path to the SVG
            svg.appendChild(path);

            box.appendChild(svg);

        }
        else {
            const icon = document.createElement('i');
            icon.classList.add("fa-solid", elementToAddIcons[element]);
            box.appendChild(icon);
        }

        const text = document.createElement('p');
        text.innerText = elementsText[element];
        box.appendChild(text);

        const textSecond = document.createElement('p');
        textSecond.innerText = elementsToAdd[element];
        box.appendChild(textSecond);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    CreateElementsForFooterContent();
});