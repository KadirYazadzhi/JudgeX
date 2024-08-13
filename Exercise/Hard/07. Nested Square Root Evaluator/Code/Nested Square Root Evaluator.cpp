#include <iostream>
#include <cmath>
#include <sstream>
#include <stack>

using namespace std;

double evaluateExpression(string expression) {
    size_t pos = expression.find("√");
    while (pos != string::npos) {
        expression.replace(pos, 1, "sqrt");
        pos = expression.find("√");
    }


    stringstream ss(expression);
    double result;
    ss >> result;
    return result;
}

int main() {
    string expression;
    getline(cin, expression);
    double result = evaluateExpression(expression);
    cout << result << endl;
    return 0;
}
