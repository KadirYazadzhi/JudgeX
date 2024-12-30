const chatBotContainer = document.getElementById("chat-bot");
const chatBotCloseButton = document.querySelector(".close i");
const chatBotOpenButton = document.querySelector(".extra-button-2");

chatBotOpenButton.addEventListener("click", function() {
    setTimeout(() => chatBotContainer.classList.add("open-chat-container"), 200);
});

chatBotCloseButton.addEventListener("click", function() {
    chatBotContainer.classList.remove("open-chat-container");
});