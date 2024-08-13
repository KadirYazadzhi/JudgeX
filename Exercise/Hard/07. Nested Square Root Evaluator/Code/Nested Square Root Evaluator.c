#include <stdio.h>
#include <math.h>
#include <string.h>

double evaluateExpression(char* expression) {
    char* pos = strstr(expression, "√");
    while (pos != NULL) {
        *pos = ' '; 
        double number;
        sscanf(pos + 1, "(%lf)", &number);
        sprintf(pos, "%lf", sqrt(number));
        pos = strstr(expression, "√");
    }

    double result;
    sscanf(expression, "%lf", &result);
    return result;
}

int main() {
    char expression[100];
    fgets(expression, sizeof(expression), stdin);
    double result = evaluateExpression(expression);
    printf("%lf\n", result);
    return 0;
}

