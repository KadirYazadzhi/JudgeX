#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int findMissingNumber(int arr[], int size) {
    int expectedSum = (arr[0] + arr[size - 1]) * (size + 1) / 2;
    int actualSum = 0;
    for (int i = 0; i < size; i++) {
        actualSum += arr[i];
    }
    return expectedSum - actualSum;
}

int main() {
    char line[1000];
    fgets(line, sizeof(line), stdin);
    
    int arr[1000];
    int n = 0;
    char *token = strtok(line, ",");
    while (token != NULL) {
        arr[n++] = atoi(token);
        token = strtok(NULL, ",");
    }

    printf("%d\n", findMissingNumber(arr, n));
    return 0;
}
}