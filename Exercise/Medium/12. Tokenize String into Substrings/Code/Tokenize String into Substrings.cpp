#include <iostream>
#include <string>
#include <vector>

using namespace std;

vector<string> tokenizeString(const string &str, char delimiter) {
    vector<string> tokens;
    string token;
    for (char ch : str) {
        if (ch == delimiter) {
            if (!token.empty()) {
                tokens.push_back(token);
                token.clear();
            }
        } else {
            token += ch;
        }
    }
    if (!token.empty()) {
        tokens.push_back(token);
    }
    return tokens;
}

int main() {
    string input;
    char delimiter;

    getline(cin, input);

    cin >> delimiter;

    vector<string> tokens = tokenizeString(input, delimiter);

    for (const string &token : tokens) {
        cout << token << endl;
    }

    return 0;
}

