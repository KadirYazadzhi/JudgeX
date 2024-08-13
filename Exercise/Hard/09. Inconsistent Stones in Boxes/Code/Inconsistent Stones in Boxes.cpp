#include <iostream>

using namespace std;

int findInconsistentBox() {
    for (int i = 1; i <= 1000; ++i) {
        int stones = 0;  
        for (int j = 1; j <= 1000; ++j) {
            if (i == j) {
                stones += i;  
            }
        }
        if (stones != i) {
            return i;  
        }
    }
    return -1; 
}

int main() {
    int inconsistentBox = findInconsistentBox();
    cout << inconsistentBox << endl;
    return 0;
}
