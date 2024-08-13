#include <iostream>
#include <string>

using namespace std;

string space(string s) {
	int d1 = static_cast<int>(s.find("["));
	int d2 = d1;
	for (int i = d1+1; i < s.length(); i++) {
		if (s[i] == '[') d1 = i;
		if (s[i] == ']') {
			d2 = i;
			break;
		}
	}
	string rep = "";
	int d = stoi(s.substr(d1+1,1));
	for (int i = 0; i < d; i++) rep += s.substr(d1+2,d2-d1-2);
	return s.substr(0,d1) + rep + s.substr(d2+1);
}

string spaceMessage(string s) {
	while (s.find("[") != string::npos) s = space(s);
	return s;
}

int main() {
    string s;
    getline(cin, s);
    cout << spaceMessage(s) << endl;
}