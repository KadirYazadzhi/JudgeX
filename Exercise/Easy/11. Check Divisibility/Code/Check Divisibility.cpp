#include <iostream>

using namespace std;

bool checkDivisibility(int num1, int num2) {
    if (num1 % num2 == 0) {
        return true;
    }
    return false;
}

int main() {
    int num1, num2;
    cin >> num1 >> num2;

    if (checkDivisibility(num1, num2)) {
        cout << "Divisible" << endl;
    }
    else {
        cout << "Not Divisible" << endl;
    }

    return 0;
}