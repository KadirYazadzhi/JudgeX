#include <iostream>
#include <string>
#include <cctype>

using namespace std;

bool isStrongPassword(const string& password) {
    bool hasLength = password.length() >= 8;
    bool hasUpperCase = false;
    bool hasLowerCase = false;
    bool hasDigit = false;
    bool hasSpecialChar = false;

    for (char ch : password) {
        if (isupper(ch)) {
            hasUpperCase = true;
        } 
        else if (islower(ch)) {
            hasLowerCase = true;
        } 
        else if (isdigit(ch)) {
            hasDigit = true;
        } 
        else if (ispunct(ch) || ch == '!' || ch == '@' || ch == '#' || ch == '$' ||
                   ch == '%' || ch == '^' || ch == '&' || ch == '*' || ch == '(' ||
                   ch == ')' || ch == '-' || ch == '_' || ch == '+' || ch == '=' ||
                   ch == '<' || ch == '>' || ch == '?') {
            hasSpecialChar = true;
        }
    }

    return hasLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}

int main() {
    string password;
    getline(cin, password);

    if (isStrongPassword(password)) {
        cout << "Strong" << endl;
    } 
    else {
        cout << "Weak" << endl;
    }

    return 0;
}
