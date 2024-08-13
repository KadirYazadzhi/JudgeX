using System;

class Program {
    static void Main() {
        string password = Console.ReadLine();

        if (IsStrongPassword(password)) {
            Console.WriteLine("Strong");
        }
        else {
            Console.WriteLine("Weak");
        }
    }

    static bool IsStrongPassword(string password) {
        bool hasLength = password.Length >= 8;
        bool hasUpperCase = false;
        bool hasLowerCase = false;
        bool hasDigit = false;
        bool hasSpecialChar = false;

        foreach (char ch in password) {
            if (char.IsUpper(ch)) {
                hasUpperCase = true;
            }
            else if (char.IsLower(ch)) {
                hasLowerCase = true;
            }
            else if (char.IsDigit(ch)) {
                hasDigit = true;
            }
            else if (char.IsPunctuation(ch) || char.IsSymbol(ch)) {
                hasSpecialChar = true;
            }
        }

        return hasLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
    }
}



