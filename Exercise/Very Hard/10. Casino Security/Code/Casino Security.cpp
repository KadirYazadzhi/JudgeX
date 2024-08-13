#include <iostream>
#include <string>
using namespace std;

string casinoSecurity(string s) {
    int thiefPos = s.find('T');
    int moneyPos = s.find('$');
    int guardPos = s.find('G');

    if (thiefPos == -1 || moneyPos == -1) {
        return "Safe";
    }

    if (thiefPos < moneyPos && moneyPos < guardPos) {
        return "Safe";
    }

    if (guardPos < moneyPos && moneyPos < thiefPos) {
        return "Safe";
    }

    return "ALARM!";
}

int main() {
    string input;
    getline(cin, input);

    string result = casinoSecurity(input);
    cout << result << endl;

    return 0;
}
