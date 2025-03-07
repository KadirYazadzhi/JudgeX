document.querySelector(".ai-button").addEventListener("mouseenter", function(event) {
    buttonHover("Ai Assistant");
});

document.querySelector(".document-button").addEventListener("mouseenter", function(event) {
    buttonHover("Download Document");
});

document.querySelector(".certificateBtn").addEventListener("mouseenter", function(event) {
    buttonHover("View Your Certificate");
});


function buttonHover(text) {
    let tooltip = document.createElement("div");
    tooltip.textContent = text;
    tooltip.classList.add("custom-tooltip");
    document.body.appendChild(tooltip);

    let buttonRect = event.target.getBoundingClientRect();
    let tooltipHeight = tooltip.offsetHeight;

    tooltip.style.top = (buttonRect.top - tooltipHeight - 10) + "px";
    tooltip.style.left = (buttonRect.left + (buttonRect.width / 2) - (tooltip.offsetWidth / 2)) + "px";

    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";

    event.target.addEventListener("mouseleave", function() {
        tooltip.remove();
    }, { once: true });
}