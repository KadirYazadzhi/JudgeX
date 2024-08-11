#include <iostream>

using namespace std;

void calcPer(int length, int width) {
    int result = 2 * (length + width);
    cout << result << endl;
}

int main() {
    int length, width;
    cin >> length >> width;

    calcPer(length, width);

    return 0;
}