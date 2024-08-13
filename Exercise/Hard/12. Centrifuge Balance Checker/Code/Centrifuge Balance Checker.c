#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

bool cFuge(int n, int k) {
    if (n == 1 || k == 1) {
        return false;
    }
    if (n % 2 != 0) {
        return n == k;
    } 
    return (n - k) % 2 == 0;
}

int main() {
    char input[100];
    fgets(input, sizeof(input), stdin);

    char* commaPos = strchr(input, ',');
    if (commaPos != NULL) {
        *commaPos = '\0';
        int n = atoi(input);
        int k = atoi(commaPos + 1);

        if (cFuge(n, k)) {
            printf("true\n");
        } else {
            printf("false\n");
        }
    }

    return 0;
}

