#include <iostream>
#include <string>

using namespace std;

void digitSplitter(int number) {
    string numStr = to_string(number);
    for (char c : numStr) {
        cout << c << endl;
    }
}

int main() {
    int number;
    cin >> number;
    digitSplitter(number);
    return 0;
}

