class RangeManager {
    constructor(rangeSelector) {
        this.range = document.querySelector(rangeSelector);
        this.init();
    }

    init() {
        if (!this.isCSSFeatureSupported("timeline-scope", "--foo")) {
            this.updateRangeValue();
            this.addRangeInputListener();
        }
    }

    isCSSFeatureSupported(property, value) {
        return CSS.supports(property, value);
    }

    updateRangeValue() {
        document.body.style.setProperty("--range", this.range.value);
    }

    addRangeInputListener() {
        this.range.oninput = () => {
            this.updateRangeValue();
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RangeManager('#range');
});
