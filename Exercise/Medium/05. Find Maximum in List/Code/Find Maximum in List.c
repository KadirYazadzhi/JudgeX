#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

int main() {
    char line[1024];
    fgets(line, sizeof(line), stdin);

    char *token = strtok(line, ",");
    int numbers[100];
    int count = 0;

    while (token != NULL) {
        numbers[count++] = atoi(token);
        token = strtok(NULL, ",");
    }

    int max = INT_MIN;
    for (int i = 0; i < count; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    printf("%d\n", max);

    return 0;
}

