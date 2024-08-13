#include <iostream>
#include <string>

using namespace std;

void rotateRight(string& str) {
    char temp = str.back();
    str.pop_back();
    str.insert(str.begin(), temp);
}

int main() {
    int n;
    string word;

    cin >> n;
    cin >> word;

    for (int i = 0; i < n; i++) {
        if (i > 0) cout << ", ";
        cout << word;
        rotateRight(word);
    }
    cout << endl;
    
    return 0;
}
