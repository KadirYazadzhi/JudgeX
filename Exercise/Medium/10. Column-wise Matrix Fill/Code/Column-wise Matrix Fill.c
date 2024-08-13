#include <stdio.h>

void fullMatrix(int n, int arr[n][n]) {
    int num = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            arr[i][j] = num++;
        }
    }
}

void printMatrix(int n, const int arr[n][n]) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int n;
    scanf("%d", &n);

    int arr[n][n];

    fullMatrix(n, arr);
    printMatrix(n, arr);

    return 0;
}
