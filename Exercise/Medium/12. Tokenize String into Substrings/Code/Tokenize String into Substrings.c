#include <stdio.h>
#include <string.h>

void tokenizeString(char *str, char delimiter) {
    char *token = strtok(str, &delimiter);
    while (token != NULL) {
        printf("%s\n", token);
        token = strtok(NULL, &delimiter);
    }
}

int main() {
    char input[256];
    char delimiter;

    fgets(input, sizeof(input), stdin);

    input[strcspn(input, "\n")] = '\0';

    scanf("%c", &delimiter);

    tokenizeString(input, delimiter);

    return 0;
}

