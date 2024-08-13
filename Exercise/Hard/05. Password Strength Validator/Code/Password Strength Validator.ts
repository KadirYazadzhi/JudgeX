function IsStrongPassword(password: string): boolean {
    const hasLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()-_+=<>?]/.test(password);

    return hasLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}

if (IsStrongPassword("Password1!")) {
    console.log("Strong");
} 
else {
    console.log("Weak");
}

