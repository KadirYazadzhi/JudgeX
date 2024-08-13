#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

double evaluateExpression(char *expression) {
    char *endptr;
    return strtod(expression, &endptr);  
}

int main() {
    char expression[100];
    fgets(expression, sizeof(expression), stdin);
    

    expression[strcspn(expression, "\n")] = '\0';

    double result = evaluateExpression(expression);
    printf("%.2f\n", result);  

    return 0;
}

