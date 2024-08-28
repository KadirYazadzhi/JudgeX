// Disable the context menu (right-click) on the entire page
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu from appearing
});

// Disable F12 key and Ctrl+Shift+I shortcut
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault(); // Prevent the default action of the key combination
    }
});
