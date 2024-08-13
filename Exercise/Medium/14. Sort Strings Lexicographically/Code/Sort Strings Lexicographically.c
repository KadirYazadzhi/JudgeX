#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_WORDS 100
#define MAX_LENGTH 100

int compare(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

int main() {
    char input[MAX_WORDS * MAX_LENGTH];
    char *words[MAX_WORDS];
    int count = 0;

    fgets(input, sizeof(input), stdin);

    input[strcspn(input, "\n")] = '\0'; 

    char *token = strtok(input, " ");
    while (token != NULL) {
        words[count] = (char *)malloc(strlen(token) + 1);
        strcpy(words[count], token);
        count++;
        token = strtok(NULL, " ");
    }

    qsort(words, count, sizeof(char *), compare);

    for (int i = 0; i < count; ++i) {
        printf("%s", words[i]);
        if (i < count - 1) {
            printf(", ");
        }
        free(words[i]);
    }

    return 0;
}

