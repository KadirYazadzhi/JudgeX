const specialKey = "Fk93!dj#1ZlA09Qw7k&2Hn19E//*0la9012+:";

const encryptionKey = specialKey;  // Replace with your own secure key

// Function to encrypt data
function encryptData(data) {
    return CryptoJS.AES.encrypt(data, encryptionKey).toString();
}

// Function to decrypt data
function decryptData(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Function to download encrypted localStorage as a JSON file
function downloadLocalStorage() {
    const allData = { ...localStorage };
    const jsonString = JSON.stringify(allData);
    const encryptedData = encryptData(jsonString);

    const blob = new Blob([encryptedData], { type: "application/json" });
    const link = document.createElement("a");
    link.download = `JudgeX_Data.json`;
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to upload and decrypt localStorage from JSON file
function uploadLocalStorage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const encryptedData = e.target.result;
            try {
                const decryptedData = decryptData(encryptedData);
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

// Attach event listeners to buttons
document.getElementById('json-download-button').addEventListener('click', downloadLocalStorage);
document.getElementById('json-big-upload-input').addEventListener('change', uploadLocalStorage);
document.getElementById('json-upload-input').addEventListener('click', function() {
    document.getElementById('file-input').addEventListener('change', uploadLocalStorage);
});