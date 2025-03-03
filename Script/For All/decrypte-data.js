async function displayDecryptedData() {
    try {
        const decryptedUsername = await registerForm.decryptData(encryptedUsername);
        const decryptedEmail = await registerForm.decryptData(encryptedEmail);
        const decryptedPassword = await registerForm.decryptData(encryptedPassword);

        // Сега можете да използвате декриптираните данни
        console.log("Username:", decryptedUsername);
        console.log("Email:", decryptedEmail);
        console.log("Password:", decryptedPassword);

        // Или да ги покажете на страницата
        document.getElementById('decryptedUsername').textContent = decryptedUsername;
        document.getElementById('decryptedEmail').textContent = decryptedEmail;
        document.getElementById('decryptedPassword').textContent = decryptedPassword;

    } catch (error) {
        console.error("Decryption error:", error);
    }
}

displayDecryptedData();

const encryptedUsername = JSON.parse(localStorage.getItem('currentUsername'));
const encryptedEmail = JSON.parse(localStorage.getItem('currentEmail'));
const encryptedPassword = JSON.parse(localStorage.getItem('currentPassword'));