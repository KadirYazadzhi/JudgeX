#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <sstream>

using namespace std;

int main() {
    string input;
    getline(cin, input);

    stringstream ss(input);
    vector<string> words;
    string word;

    while (ss >> word) {
        words.push_back(word);
    }

    sort(words.begin(), words.end());

    for (size_t i = 0; i < words.size(); ++i) {
        cout << words[i];
        if (i < words.size() - 1) {
            cout << ", ";
        }
    }

    return 0;
}
