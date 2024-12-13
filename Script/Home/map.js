document.addEventListener('DOMContentLoaded', function() {
    class Map {
        constructor(openButton, map, closeButton) {
            this.buttonOpen = document.getElementById(openButton);
            this.buttonClose = document.getElementById(closeButton);
            this.form = document.getElementById(map);
            
            // Add event listeners only if elements exist
            this.buttonOpen.addEventListener('click', () => {
                this.toggleForm();
            });

            this.buttonClose.addEventListener('click', () => {
                this.closeForm();
            });
        }

        toggleForm() {
            this.form.style.bottom = '0%';
        }

        closeForm() {
            this.form.style.bottom = '-100%';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new Map('map-button', 'map', 'close-iframe');
    });

});