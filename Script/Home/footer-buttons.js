document.addEventListener('DOMContentLoaded', function() {
    const footerButtons = document.querySelector('.other-buttons');

    // Toggle the buttons on click
    footerButtons.addEventListener('click', function() {
        footerButtons.classList.toggle('active'); // Add or remove the active class to trigger animation
        chatBotApp.secondPosition();

        const extraButtons = document.querySelectorAll('.extra-button');
        extraButtons.forEach(button => {
            button.classList.toggle('hidden'); // Show or hide the extra buttons
        });
    });
});