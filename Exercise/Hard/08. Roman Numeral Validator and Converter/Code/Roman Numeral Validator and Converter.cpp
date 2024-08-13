#include <iostream>
#include <unordered_map>

using namespace std;

int romanToInt(string s) {
    unordered_map<char, int> romanValues = {
        {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, 
        {'C', 100}, {'D', 500}, {'M', 1000}
    };

    int result = 0;
    int prevValue = 0;

    for (int i = s.length() - 1; i >= 0; i--) {
        int currentValue = romanValues[s[i]];
        
        if (currentValue >= prevValue) {
            result += currentValue;
        } 
        else {
            result -= currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

bool isValidRoman(string s) {
    for (char& c : s) {
        if (c != 'I' && c != 'V' && c != 'X' && c != 'L' && 
            c != 'C' && c != 'D' && c != 'M') {
            return false;
        }
    }
    return true;
}

int main() {
    string roman;
    cin >> roman;

    if (!isValidRoman(roman)) {
        cout << "Error: Invalid Roman numeral" << endl;
    } else {
        int arabic = romanToInt(roman);
        cout << arabic << endl;
    }

    return 0;
}
