#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sortAndFilter(int arr[], int size) {
    int count5 = 0, count6 = 0, count7 = 0;
    for (int i = 0; i < size; i++) {
        if (arr[i] == 5) count5++;
        else if (arr[i] == 6) count6++;
        else if (arr[i] == 7) count7++;
    }
    
    for (int i = 0; i < count5; i++) printf("5 ");
    for (int i = 0; i < count6; i++) printf("6 ");
    for (int i = 0; i < count7; i++) printf("7 ");
    printf("\n");
}

int main() {
    char line[1000];
    fgets(line, sizeof(line), stdin);

    int arr[1000];
    int n = 0;
    char *token = strtok(line, " ");
    while (token != NULL) {
        int num = atoi(token);
        if (num >= 5 && num <= 7) {
            arr[n++] = num;
        }
        token = strtok(NULL, " ");
    }

    sortAndFilter(arr, n);
    return 0;
}