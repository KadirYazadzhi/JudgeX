#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* space(char* s) {
    int d1 = -1, d2 = -1;
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] == '[') {
            d1 = i;
        } else if (s[i] == ']') {
            d2 = i;
            break;
        }
    }
    if (d1 == -1 || d2 == -1) {
        return s;
    }

    int d = atoi(s + d1 + 1);
    char* rep = (char*)malloc((d * (d2 - d1 - 1) + 1) * sizeof(char));
    int index = 0;
    for (int i = 0; i < d; i++) {
        strncpy(rep + index, s + d1 + 2, d2 - d1 - 2);
        index += (d2 - d1 - 2);
    }
    rep[index] = '\0';

    char* result = (char*)malloc((strlen(s) - (d2 - d1) + strlen(rep) + 1) * sizeof(char));
    strncpy(result, s, d1);
    strcpy(result + d1, rep);
    strcpy(result + d1 + strlen(rep), s + d2 + 1);

    free(rep);
    return result;
}

char* spaceMessage(char* s) {
    while (strstr(s, "[") != NULL) {
        s = space(s);
    }
    return s;
}

int main() {
    char s[1000];
    fgets(s, sizeof(s), stdin);
    s[strcspn(s, "\n")] = '\0';  

    char* result = spaceMessage(s);
    printf("%s\n", result);

    free(result);
    return 0;
}

