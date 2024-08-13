#include <iostream>
#include <string>
#include <sstream>

using namespace std;

void sumList() {
    string line;
    getline(cin, line);
    istringstream istr(line);
    
    int num;
    int sum;
    while (istr >> num) {
        sum += num;
    }

    cout << sum << endl;
}

int main() {
    sumList();

    return 0;
}