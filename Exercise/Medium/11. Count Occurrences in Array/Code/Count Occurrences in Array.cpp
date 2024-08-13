#include <iostream>
#include <vector>
#include <sstream>
#include <string>

using namespace std;

void readVector(vector<int> & numbers) {
    string line;
    getline(cin, line);
    istringstream istr(line);

    int number;
    while(istr >> number) {
        numbers.push_back(number);
    }
}

void findNumber(vector<int> numbers) {
    int num;
    cin >> num;

    int counter = 0;
    while (!numbers.empty()) {
        if (numbers.back() == num) {
            counter++;
        }
        numbers.pop_back();
    }

    cout << counter << endl;
}

int main() {
    vector<int> numbers;

    readVector(numbers);
    findNumber(numbers);

    return 0;
}