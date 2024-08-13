#include <iostream>
#include <vector>

using namespace std;

void printLargeDigit(int digit) {
    switch (digit) {
        case 0:
            cout << " ##### \n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << " ##### \n";
            break;
        case 1:
            cout << "   #   \n";
            cout << "  ##   \n";
            cout << "   #   \n";
            cout << "   #   \n";
            cout << "   #   \n";
            cout << "   #   \n";
            cout << " ##### \n";
            break;
        case 2:
            cout << " ##### \n";
            cout << "#     #\n";
            cout << "      #\n";
            cout << " ##### \n";
            cout << "#      \n";
            cout << "#      \n";
            cout << "#######\n";
            break;
        case 3:
            cout << " ##### \n";
            cout << "#     #\n";
            cout << "      #\n";
            cout << " ##### \n";
            cout << "      #\n";
            cout << "#     #\n";
            cout << " ##### \n";
            break;
        case 4:
            cout << "#      \n";
            cout << "#    # \n";
            cout << "#    # \n";
            cout << "#######\n";
            cout << "     # \n";
            cout << "     # \n";
            cout << "     # \n";
            break;
        case 5:
            cout << "#######\n";
            cout << "#      \n";
            cout << "#      \n";
            cout << " ##### \n";
            cout << "      #\n";
            cout << "#     #\n";
            cout << " ##### \n";
            break;
        case 6:
            cout << " ##### \n";
            cout << "#     #\n";
            cout << "#      \n";
            cout << "###### \n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << " ##### \n";
            break;
        case 7:
            cout << "#######\n";
            cout << "     # \n";
            cout << "    #  \n";
            cout << "   #   \n";
            cout << "  #    \n";
            cout << " #     \n";
            cout << "#      \n";
            break;
        case 8:
            cout << " ##### \n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << " ##### \n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << " ##### \n";
            break;
        case 9:
            cout << " ##### \n";
            cout << "#     #\n";
            cout << "#     #\n";
            cout << "###### \n";
            cout << "      #\n";
            cout << "#     #\n";
            cout << " ##### \n";
            break;
    }
}

void printLargeNumber(int number) {
    if (number == 0) {
        printLargeDigit(0);
        return;
    }

    vector<int> digits;
    while (number > 0) {
        digits.push_back(number % 10);
        number /= 10;
    }

    for (auto it = digits.rbegin(); it != digits.rend(); ++it) {
        printLargeDigit(*it);
    }
}

int main() {
    int number;

    cin >> number;

    printLargeNumber(number);

    return 0;
}
