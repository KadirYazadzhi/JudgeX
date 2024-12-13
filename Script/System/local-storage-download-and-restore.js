// Import CryptoJS library
// <script src="https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.js"></script>

class Encryptor {
    constructor(key) {
        this.key = key;
    }

    encrypt(data) {
        return CryptoJS.AES.encrypt(data, this.key).toString();
    }

    decrypt(encryptedData) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, this.key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}

class ClipboardImporter {
    constructor(encryptor) {
        this.encryptor = encryptor;
    }

    async importFromClipboard() {
        try {
            if (!navigator.clipboard) {
                alert("Clipboard API not supported.");
                return;
            }

            const clipboardText = await navigator.clipboard.readText();
            if (!clipboardText) {
                alert("Clipboard is empty.");
                return;
            }

            try {
                new URL(clipboardText);
            } catch (e) {
                alert("Clipboard does not contain a valid URL.");
                return;
            }

            fetch(clipboardText)
                .then(response => response.text())
                .then(encryptedData => {
                    try {
                        const decryptedData = this.encryptor.decrypt(encryptedData);
                        const data = JSON.parse(decryptedData);

                        for (let key in data) {
                            localStorage.setItem(key, data[key]);
                        }

                        alert("Your data restored successfully!");
                    } catch (error) {
                        alert("Data restore failed. Please ensure you are using the correct file.");
                    }
                })
                .catch(error => {
                    alert("Failed to fetch data from the link.");
                });
        } catch (error) {
            console.error("Error accessing clipboard", error);
            alert("Failed to read from clipboard.");
        }
    }
}

class LocalStorageManager {
    constructor(encryptor) {
        this.encryptor = encryptor;
    }

    download() {
        const allData = { ...localStorage };
        const jsonString = JSON.stringify(allData);
        const encryptedData = this.encryptor.encrypt(jsonString);

        const blob = new Blob([encryptedData], { type: "application/json" });
        const link = document.createElement("a");
        link.download = `JudgeX_Data.json`;
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    upload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const encryptedData = e.target.result;
                try {
                    const decryptedData = this.encryptor.decrypt(encryptedData);
                    const data = JSON.parse(decryptedData);

                    for (let key in data) {
                        localStorage.setItem(key, data[key]);
                    }

                    alert("Your data restored successfully!");
                } catch (error) {
                    alert("Data restore failed. Please ensure you are using the correct file.");
                }
            };
            reader.readAsText(file);
        }
    }
}

// Initialization
const specialKey = "Fk93!dj#1ZlA09Qw7k&2Hn19E//*0la9012+:";
const encryptor = new Encryptor(specialKey);
const clipboardImporter = new ClipboardImporter(encryptor);
const localStorageManager = new LocalStorageManager(encryptor);

// Attach event listeners to buttons
document.getElementById('json-download-button').addEventListener('click', () => localStorageManager.download());
document.getElementById('json-big-upload-input').addEventListener('change', (e) => localStorageManager.upload(e));
document.getElementById('json-upload-input').addEventListener('change', (e) => localStorageManager.upload(e));
document.getElementById('json-link-upload').addEventListener('click', () => clipboardImporter.importFromClipboard());
