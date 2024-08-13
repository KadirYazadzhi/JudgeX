#include <iostream>
#include <string>

using namespace std;

string calculateDay(const string& startDay, int N) {
    string days[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    int startIdx = -1;

    for (int i = 0; i < 7; i++) {
        if (startDay == days[i]) {
            startIdx = i;
            break;
        }
    }

    int endIdx = (startIdx + N) % 7;
    return days[endIdx];
}

int main() {
    string startDay;
    int N;

    getline(cin, startDay);

    cin >> N;

    string result = calculateDay(startDay, N);
    cout << result << endl;

    return 0;
}
