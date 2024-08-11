#include <iostream>
#include <cmath>

using namespace std;

void simpleCalculator(double num1, double num2, char operatorChar) {
    double result;
    switch (operatorChar) {
        case '+':
            result = num1 + num2;
            cout << result << endl;
            break;
        case '-':
            result = num1 - num2;
            cout << result << endl;
            break;
        case '*':
            result = num1 * num2;
            cout << result << endl;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                cout << result << endl;
            } else {
                cout << "Cannot divide by zero" << endl;
            }
            break;
        case '%':
            if ((int)num2 != 0) {
                result = (int)num1 % (int)num2;
                cout << result << endl;
            } else {
                cout << "Cannot divide by zero" << endl;
            }
            break;
        case '^':
            result = pow(num1, num2);
            cout << result << endl;
            break;
        default:
            cout << "Invalid operator" << endl;
    }
}

int main() {
    double num1, num2;
    char operatorChar;

    cin >> num1;
    cin >> num2;
    cin >> operatorChar;

    simpleCalculator(num1, num2, operatorChar);

    return 0;
}
