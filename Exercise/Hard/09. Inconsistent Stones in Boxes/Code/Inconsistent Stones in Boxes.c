#include <stdio.h>
#include <stdlib.h>

void readVector(int numbers[], int n) {
    char line[1000];
    fgets(line, sizeof(line), stdin);

    char *token = strtok(line, " ");
    int i = 0;
    while (token != NULL && i < n) {
        numbers[i++] = atoi(token);
        token = strtok(NULL, " ");
    }
}

void findNumber(int numbers[], int n, int num) {
    int counter = 0;
    for (int i = 0; i < n; i++) {
        if (numbers[i] == num) {
            counter++;
        }
    }
    printf("%d\n", counter);
}

int main() {
    int n;
    scanf("%d", &n);

    int numbers[n];
    readVector(numbers, n);

    int num;
    scanf("%d", &num);

    findNumber(numbers, n, num);

    return 0;
}
