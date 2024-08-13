#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <climits>

using namespace std;

int main() {
    string line;
    getline(cin, line);

    istringstream istr(line);
    vector<int> numbers;
    string temp;

    while (getline(istr, temp, ',')) {
        int num;
        istringstream(temp) >> num;
        numbers.push_back(num);
    }

    int max = INT_MIN;
    for (int num : numbers) {
        if (num > max) {
            max = num;
        }
    }

    cout << max << endl;

    return 0;
}
