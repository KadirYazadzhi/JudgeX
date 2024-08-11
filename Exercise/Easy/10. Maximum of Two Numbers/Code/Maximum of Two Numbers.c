#include <stdio.h>

void maxNumber(int num1, int num2) {
    int number;
    if (num1 > num2) {
        number = num1;
    }
    else {
        number = num2;
    }
    printf("%d\n", number);
}


int main() {
    int num1;
    int num2;
    scanf("%d", &num1);
    scanf("%d", &num2);

    maxNumber(num1, num2);
}