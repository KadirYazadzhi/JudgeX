#include <iostream>
#include <sstream>
#include <string>

using namespace std;

bool cFuge(int n, int k) {
    if (n == 1 || k == 1) {
        return false;
    }
    if (n % 2 != 0) {
        if (n == k) {
            return true;
        } 
        else {
            return false;
        }
    } 
    else if ((n - k) % 2 == 0) {
        return true;
    }
    return false; 
}

int main() {
    string input;
    getline(cin, input);

    size_t commaPos = input.find(',');
        if (commaPos != string::npos) {
        string nStr = input.substr(0, commaPos);
        string kStr = input.substr(commaPos + 1);
        
        int n, k;
        n = stoi(nStr);
        k = stoi(kStr);

        if (cFuge(n, k)) {
            cout << "true" << endl;
        } 
        else {
            cout << "false" << endl;
        }
    }

    return 0;
}

