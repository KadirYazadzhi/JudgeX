#include <stdio.h>
#include <math.h>

void simpleCalculator(double num1, double num2, char operator) {
    double result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            printf("%d\n", result);
            break;
        case '-':
            result = num1 - num2;
            printf("%d\n", result);
            break;
        case '*':
            result = num1 * num2;
            printf("%d\n", result);
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                printf("%d\n", result);
            } else {
                printf("Cannot divide by zero\n");
            }
            break;
        case '%':
            if ((int)num2 != 0) {
                result = (int)num1 % (int)num2;
                printf("%d\n", result);
            } else {
                printf("Cannot divide by zero\n");
            }
            break;
        case '^':
            result = pow(num1, num2);
            printf("%d\n", result);
            break;
        default:
            printf("Invalid operator\n");
    }
}

int main() {
    double num1, num2;
    char operator;

    scanf("%lf", &num1);
    scanf("%lf", &num2);
    scanf(" %c", &operator);

    simpleCalculator(num1, num2, operator);

    return 0;
}
