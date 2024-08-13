function isStrongPassword(password) {
    const hasLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()-_+=<>?]/.test(password);

    return hasLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}

let password = "Password1!";
if (isStrongPassword(password)) {
    console.log("Strong");
} 
else {
    console.log("Weak");
}
