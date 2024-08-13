#include <iostream>
#include <cmath>
#include <string>

using namespace std;

int funny_number(int n, int p) {
    int sum = 0;
    string str = to_string(n);

    for (size_t i = 0; i < str.length(); ++i) {
        sum += pow(str[i] - '0', p + i);
    }

    if (sum % n == 0) {
        return sum / n;
    } else {
        return -1;
    }
}

int main() {
    int n, p;
    cin >> n;
    cin >> p;
    
    cout << funny_number(n, p) << endl;
    return 0;
}
