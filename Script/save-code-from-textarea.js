document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('code-editor');

    const savedCode = localStorage.getItem('codeEditorContent');
    if (savedCode !== null) {
        codeEditor.value = savedCode;
    }

    codeEditor.addEventListener('input', function() {
        localStorage.setItem('codeEditorContent', codeEditor.value);
    });
});