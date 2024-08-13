#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

string isVampireNumber(int n) {
    string n_str = to_string(n);
    int len = n_str.size();
    
    if (n < 100) {
        return "Normal Number";
    }
    
    string digits = n_str;
    sort(digits.begin(), digits.end());
    
    if (len % 2 == 0) {
        do {
            string part1 = digits.substr(0, len / 2);
            string part2 = digits.substr(len / 2);

            int num1 = stoi(part1);
            int num2 = stoi(part2);
            
            if (num1 * num2 == n && part1[0] != '0' && part2[0] != '0') {
                return "True Vampire";
            }
            
        } 
        while (next_permutation(digits.begin(), digits.end()));
    }
    else {
        do {
            for (int i = 1; i < len; ++i) {
                string part1 = digits.substr(0, i);
                string part2 = digits.substr(i);
                

                int num1 = stoi(part1);
                int num2 = stoi(part2);
                
                if (num1 * num2 == n && part1[0] != '0' && part2[0] != '0') {
                    return "Pseudovampire";
                }
            }
        } while (next_permutation(digits.begin(), digits.end()));
    }
    
    return "Normal Number";
}

int main() {
    int n;
    cin >> n;
    
    cout << isVampireNumber(n) << endl;
    
    return 0;
}
