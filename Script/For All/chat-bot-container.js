const chatBotContainer = document.getElementById("chat-bot");
const messageContainer = document.querySelector(".messages-area");
const chatBotCloseButton = document.querySelector(".close i");
const chatBotOpenButton = document.querySelector(".extra-button-2");

chatBotOpenButton.addEventListener("click", function() {
    setTimeout(() => chatBotContainer.classList.add("open-chat-container"), 200);

    if (messageContainer.textContent !== "") return;

    app.startingMessageFromBot(); // Call the method to send the first message
});

chatBotCloseButton.addEventListener("click", function() {
    chatBotContainer.classList.remove("open-chat-container");
});