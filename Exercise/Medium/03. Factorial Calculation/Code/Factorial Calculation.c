#include <stdio.h>

void factorielCalculation(int num) {
    int factorial = num;
    for (int i = num - 1; i > 0; i--) {
        factorial *= i;
    }
    printf("%d\n", factorial);
}

int main() {
    int num;
    scanf("%d", &num);

    factorielCalculation(num);

    return 0;
}
