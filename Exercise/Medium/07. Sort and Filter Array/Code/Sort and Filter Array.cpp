#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

void sortAndFilter(const vector<int>& arr) {
    int count5 = 0, count6 = 0, count7 = 0;
    for (int num : arr) {
        if (num == 5) count5++;
        else if (num == 6) count6++;
        else if (num == 7) count7++;
    }

    for (int i = 0; i < count5; i++) cout << "5 ";
    for (int i = 0; i < count6; i++) cout << "6 ";
    for (int i = 0; i < count7; i++) cout << "7 ";
    cout << endl;
}

int main() {
    string line;
    getline(cin, line);

    vector<int> arr;
    stringstream ss(line);
    int num;
    while (ss >> num) {
        if (num >= 5 && num <= 7) {
            arr.push_back(num);
        }
    }

    sortAndFilter(arr);
    return 0;
}
