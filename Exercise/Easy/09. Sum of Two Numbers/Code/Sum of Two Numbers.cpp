#include <iostream>

using namespace std;

void sumNumbers(int num1, int num2) {
    cout << num1 + num2 << endl;
}

int main() {
    int num1, num2;
    cin >> num1 >> num2;

    sumNumbers(num1, num2);

    return 0;
}