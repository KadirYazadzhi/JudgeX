#include <iostream>

using namespace std;

void factorielCalculation(int num) {
    int sum =  num;
    for (int i = num - 1; i > 0; i--) {
        sum *= i;
    }
    cout << sum << endl;
}

int main() {
    int num;
    cin >> num;

    factorielCalculation(num);

    return 0;
}