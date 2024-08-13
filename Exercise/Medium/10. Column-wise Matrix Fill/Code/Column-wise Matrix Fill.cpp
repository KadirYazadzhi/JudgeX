#include <iostream>
#include <vector>

using namespace std;

void fullMatrix(int n, vector<vector<int>>& arr) {
    int num = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            arr[i][j] = num++;
        }
    }
}

void printMatrix(int n, const vector<vector<int>>& arr) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    int n;
    cin >> n;

    vector<vector<int>> arr(n, vector<int>(n));

    fullMatrix(n, arr);
    printMatrix(n, arr);

    return 0;
}