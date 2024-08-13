#include <iostream>

using namespace std;

bool palidromCheck(string line) {
    for (int i = 0; i < line.length() / 2; i++) {
        if (line[i] != line[line.length() - i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
    string line;
    cin >> line;

    if (palidromCheck(line)) {
        cout << "True" << endl;
    }
    else {
        cout << "False" << endl;
    }

    return 0;
}