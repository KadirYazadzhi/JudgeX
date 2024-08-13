#include <iostream>
#include <string>
#include <sstream>
#include <cmath>

using namespace std;

double evaluateExpression(string& expression, int& index) {
    double result = 0;
    char op = '+';
    while (index < expression.length()) {
        char current = expression[index++];
        if (current == '(') {
            result += evaluateExpression(expression, index);
        } 
        else if (current == ')') {
            break;
        } 
        else if (std::isdigit(current)) {
            int num = current - '0';
            while (index < expression.length() && isdigit(expression[index])) {
                num = num * 10 + (expression[index++] - '0');
            }
            result = (op == '+') ? result + num : result - num;
        } 
        else if (current == '+' || current == '-') {
            op = current;
        }
    }
    return result;
}

double evaluateExpression(string expression) {
    int index = 0;
    return evaluateExpression(expression, index);
}

int main() {
    string expression;
    getline(cin, expression);

    double result = evaluateExpression(expression);
    cout << result << endl;

    return 0;
}
