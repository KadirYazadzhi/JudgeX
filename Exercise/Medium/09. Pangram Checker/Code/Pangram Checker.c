#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPangram(char* str) {
    int alphabet[26] = {0};
    int index;

    for (int i = 0; str[i] != '\0'; i++) {
        if (isalpha(str[i])) {
            index = tolower(str[i]) - 'a';
            alphabet[index] = 1;
        }
    }

    for (int i = 0; i < 26; i++) {
        if (alphabet[i] == 0) {
            return 0;  
        }
    }
    return 1;  
}

int main() {
    char str[1000];
    fgets(str, sizeof(str), stdin);

    size_t len = strlen(str);
    if (len > 0 && str[len - 1] == '\n') {
        str[len - 1] = '\0';
    }

    if (isPangram(str)) {
        printf("True\n");
    } else {
        printf("False\n");
    }

    return 0;
}
