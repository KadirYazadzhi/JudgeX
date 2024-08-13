#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define MAX_SIZE 100

bool isOpeningBracket(char ch) {
    return (ch == '(' || ch == '{' || ch == '[');
}

bool isValidPair(char opening, char closing) {
    return (opening == '(' && closing == ')') ||
           (opening == '{' && closing == '}') ||
           (opening == '[' && closing == ']');
}

bool isValidExpression(char* expression) {
    char stack[MAX_SIZE];
    int top = -1;

    for (int i = 0; i < strlen(expression); i++) {
        char currentChar = expression[i];

        if (isOpeningBracket(currentChar)) {
            stack[++top] = currentChar;
        } 
        else {
            if (top == -1 || !isValidPair(stack[top], currentChar)) {
                return false;
            }
            top--;
        }
    }

    return top == -1; 
}

int main() {
    char expression[MAX_SIZE];

    fgets(expression, sizeof(expression), stdin);
    expression[strcspn(expression, "\n")] = '\0'; 

    if (isValidExpression(expression)) {
        printf("True\n");
    } 
    else {
        printf("False\n");
    }

    return 0;
}
