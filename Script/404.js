class TextAnimator {
    constructor(selector, animationSpeed = 10, redirectDelay = 15000, redirectUrl = 'index.html') {
        this.element = document.querySelector(selector);
        this.fullText = this.element.innerHTML.toString();
        this.animationSpeed = animationSpeed;
        this.redirectDelay = redirectDelay;
        this.redirectUrl = redirectUrl;
        this.currentIndex = 0;

        this.element.innerHTML = "";
        this.init();
    }

    init() {
        this.animateText();
        this.scheduleRedirect();
    }

    animateText() {
        setTimeout(() => {
            const intervalId = setInterval(() => {
                this.currentIndex++;
                this.element.innerHTML = this.fullText.slice(0, this.currentIndex) + "|";

                if (this.currentIndex === this.fullText.length) {
                    clearInterval(intervalId);
                    this.element.innerHTML = this.fullText;
                }
            }, this.animationSpeed);
        }, 0);
    }

    scheduleRedirect() {
        setTimeout(() => {
            window.location.href = this.redirectUrl;
        }, this.redirectDelay);
    }
}

new TextAnimator('div', 10, 15000, 'index.html');

