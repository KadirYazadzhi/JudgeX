#include <iostream>
#include <string>

using namespace std;

string caesarCipher(const string& str, int shift) {
    string result = str;
    for (char& c : result) {
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            c = base + (c - base + shift) % 26;
        }
    }
    return result;
}

int main() {
    string input;
    int shift;

    getline(cin, input);

    cin >> shift;

    string encryptedText = caesarCipher(input, shift);
    cout << encryptedText << endl;

    return 0;
}
