class NavigationManager {
    constructor() {}
    
    navigate() {
        const selectedLevel = getSelectedLevel();
        const selectedLanguage = getSelectedLanguage();

        if (selectedLevel === null && selectedLanguage === null) {
            this.redirect("index.html");
        } else if (selectedLanguage === null) {
            this.redirect("index.html#languages");
        } else if (selectedLevel === null) {
            this.redirect("index.html#difficult");
        }
    }

    redirect(url) {
        window.location.href = `${url}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navigationManager = new NavigationManager('');
    navigationManager.navigate();
});

