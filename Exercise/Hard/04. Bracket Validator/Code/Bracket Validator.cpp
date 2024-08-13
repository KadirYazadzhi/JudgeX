#include <iostream>
#include <stack>
#include <string>

using namespace std;

bool isOpeningBracket(char ch) {
    return (ch == '(' || ch == '{' || ch == '[');
}

bool isValidPair(char opening, char closing) {
    return (opening == '(' && closing == ')') ||
           (opening == '{' && closing == '}') ||
           (opening == '[' && closing == ']');
}

bool isValidExpression(const string& expression) {
    stack<char> stack;

    for (char ch : expression) {
        if (isOpeningBracket(ch)) {
            stack.push(ch);
        } 
        else {
            if (stack.empty() || !isValidPair(stack.top(), ch)) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.empty();
}

int main() {
    string expression;

    getline(cin, expression);

    if (isValidExpression(expression)) {
        cout << "True" << endl;
    } 
    else {
        cout << "False" << endl;
    }

    return 0;
}
