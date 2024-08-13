#include <iostream>
#include <string>

using namespace std;

int titleToNumber(string s) {
    int result = 0;
    for (char& c : s) {
        result = result * 26 + (c - 'A' + 1);
    }
    return result;
}

int main() {
    string s;
    cin >> s;
    
    int number = titleToNumber(s);
    cout << number << endl;
    
    return 0;
}
