#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int findMissingNumber(const vector<int>& arr) {
    int expectedSum = (arr.front() + arr.back()) * (arr.size() + 1) / 2;
    int actualSum = 0;
    for (int num : arr) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}

int main() {
    string line;
    getline(cin, line);

    vector<int> arr;
    stringstream ss(line);
    string token;
    while (getline(ss, token, ',')) {
        arr.push_back(stoi(token));
    }

    cout <<  findMissingNumber(arr) << endl;
    return 0;
}
