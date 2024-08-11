#include <iostream>

using namespace std;

void maxNumbers(int num1, int num2) {
    if (num1 > num2) {
        cout << num1 << endl;
    }
    else {
        cout << num2 << endl;
    }
}

int main() {
    int num1, num2;
    cin >> num1 >> num2;

    maxNumbers(num1, num2);

    return 0;
}