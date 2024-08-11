#include <stdio.h>

void checkDivisibility(int num1, int num2) {
    if (num1 % num2 == 0) {
        printf("Divisible");
    }
    else {
        printf("Not Divisible");
    }
}


int main() {
    int num1;
    int num2;
    scanf("%d", &num1);
    scanf("%d", &num2);

    checkDivisibility(num1, num2);
}