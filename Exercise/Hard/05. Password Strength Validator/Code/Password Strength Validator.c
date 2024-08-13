#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool isStrongPassword(char *password) {
    int len = strlen(password);
    bool hasLength = len >= 8;
    bool hasUpperCase = false;
    bool hasLowerCase = false;
    bool hasDigit = false;
    bool hasSpecialChar = false;
    
    for (int i = 0; i < len; i++) {
        char ch = password[i];
        
        if (isupper(ch)) {
            hasUpperCase = true;
        } else if (islower(ch)) {
            hasLowerCase = true;
        } else if (isdigit(ch)) {
            hasDigit = true;
        } else if (ispunct(ch)) {
            hasSpecialChar = true;
        }
    }
    
    return hasLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}

int main() {
    char password[100];
    fgets(password, sizeof(password), stdin);
    password[strcspn(password, "\n")] = '\0'; 
    
    if (isStrongPassword(password)) {
        printf("Strong\n");
    } 
    else {
        printf("Weak\n");
    }
    
    return 0;
}
