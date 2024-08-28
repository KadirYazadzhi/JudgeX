class ConsoleBlocker {
    constructor() {
        this.initialize();
    }

    initialize() {
        // Disable the context menu (right-click)
        document.addEventListener('contextmenu', ConsoleBlocker.preventDefaultEvent);

        // Disable common key combinations for opening developer tools
        document.addEventListener('keydown', ConsoleBlocker.handleKeydown);

        // Override console methods to prevent usage
        ConsoleBlocker.overrideConsoleMethods();

        // Example: Store a message in localStorage
        this.storeMessageInLocalStorage('consoleBlocked', 'The console has been blocked.');
    }

    /**
     * Prevents the default action for the context menu and some key combinations.
     * @param {Event} event - The event object.
     */
    static preventDefaultEvent(event) {
        event.preventDefault();
    }

    /**
     * Handles keydown events to prevent opening developer tools.
     * @param {Event} event - The event object.
     */
    static handleKeydown(event) {
        const blockedKeys = [
            { key: 'F12' }, // F12 key
            { ctrlKey: true, shiftKey: true, key: 'I' }, // Ctrl+Shift+I
            { ctrlKey: true, key: 'U' }, // Ctrl+U
            { ctrlKey: true, shiftKey: true, key: 'J' }, // Ctrl+Shift+J
            { ctrlKey: true, shiftKey: true, key: 'C' }, // Ctrl+Shift+C
            { metaKey: true, shiftKey: true, key: 'J' }, // Cmd+Shift+J (Mac)
            { metaKey: true, shiftKey: true, key: 'I' }, // Cmd+Shift+I (Mac)
            { metaKey: true, key: 'U' } // Cmd+U (Mac)
        ];

        for (let combination of blockedKeys) {
            if (this.matchKeyCombination(event, combination)) {
                event.preventDefault();
                break;
            }
        }
    }

    /**
     * Checks if a key combination matches a given blocked combination.
     * @param {Event} event - The event object.
     * @param {Object} combination - The key combination to check.
     * @returns {boolean} - True if the combination matches, false otherwise.
     */
    static matchKeyCombination(event, combination) {
        return Object.keys(combination).every(key => {
            return event[key] === combination[key];
        });
    }

    /**
     * Overrides console methods to prevent their usage.
     */
    static overrideConsoleMethods() {
        const methods = ['log', 'warn', 'error', 'info', 'debug'];
        methods.forEach(method => {
            console[method] = function() {
                // Do nothing
            };
        });

        // Block access to console object
        Object.defineProperty(window, 'console', {
            value: {},
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    /**
     * Stores a message in localStorage.
     * @param {string} key - The key under which to store the message.
     * @param {string} message - The message to store.
     */
    storeMessageInLocalStorage(key, message) {
        localStorage.setItem(key, message);
    }

    /**
     * Removes all event listeners added by this instance.
     */
    remove() {
        document.removeEventListener('contextmenu', ConsoleBlocker.preventDefaultEvent);
        document.removeEventListener('keydown', ConsoleBlocker.handleKeydown);
    }
}

// Initialize the ConsoleBlocker to start blocking actions
const consoleBlocker = new ConsoleBlocker();
