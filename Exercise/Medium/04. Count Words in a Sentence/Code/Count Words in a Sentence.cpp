#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int countWords(string line) {
    getline(cin, line);
    istringstream istr(line);

    string word;
    int count = 0;
    while (istr >> word) {
        count++;
    }

    return count;
}

int main() {
    string line;
    cout << countWords(line) << endl;

    return 0;
}