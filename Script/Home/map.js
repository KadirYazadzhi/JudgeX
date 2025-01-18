document.addEventListener('DOMContentLoaded', function() {
    class Map {
        constructor(openButtonId, mapId, closeButtonId) {
            this.buttonOpen = document.getElementById(openButtonId);
            this.buttonClose = document.getElementById(closeButtonId);
            this.form = document.getElementById(mapId);
            
            if (this.buttonOpen && this.buttonClose && this.form) {
                this.buttonOpen.addEventListener('click', () => this.toggleForm());
                this.buttonClose.addEventListener('click', () => this.closeForm());
            }
        }

        toggleForm() {
            this.form.style.bottom = '0%';
        }

        closeForm() {
            this.form.style.bottom = '-100%';
        }
    }

    // Създаване на инстанция на Map класа
    new Map('map-button', 'map', 'close-iframe');
});
