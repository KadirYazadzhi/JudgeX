#include <stdio.h>
#include <string.h>

char* casinoSecurity(char* s) {
    int thiefPos = -1, moneyPos = -1, guardPos = -1;
    int i;

    for (i = 0; i < strlen(s); i++) {
        if (s[i] == 'T') {
            thiefPos = i;
        } else if (s[i] == '$') {
            moneyPos = i;
        } else if (s[i] == 'G') {
            guardPos = i;
        }
    }

    if (thiefPos == -1 || moneyPos == -1) {
        return "Safe";
    }

    if ((thiefPos < moneyPos && moneyPos < guardPos) ||
        (guardPos < moneyPos && moneyPos < thiefPos)) {
        return "Safe";
    }

    return "ALARM!";
}

int main() {
    char input[1000];
    fgets(input, sizeof(input), stdin);

    input[strcspn(input, "\n")] = 0;

    char* result = casinoSecurity(input);
    printf("%s\n", result);

    return 0;
}

