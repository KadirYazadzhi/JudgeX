#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool palindromeCheck(char *line) {
    int length = strlen(line);
    for (int i = 0; i < length / 2; i++) {
        if (line[i] != line[length - i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
    char line[100]; 
    scanf("%s", line);

    if (palindromeCheck(line)) {
        printf("True\n");
    } else {
        printf("False\n");
    }

    return 0;
}
