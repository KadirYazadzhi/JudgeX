#include <iostream>
#include <cmath>
#include <string>

using namespace std;

bool can_move(const string& piece, const string& current_position, const string& target_position) {
    int x1 = toupper(current_position[0]) - 'A';
    int y1 = current_position[1] - '1';
    int x2 = toupper(target_position[0]) - 'A';
    int y2 = target_position[1] - '1';

    if (piece == "Pawn") {
        return (x1 == x2 && (y2 == y1 + 1 || (y1 == 1 && y2 == 3)));
    } 
    else if (piece == "Knight") {
        return ((abs(x1 - x2) == 2 && abs(y1 - y2) == 1) || (abs(x1 - x2) == 1 && abs(y1 - y2) == 2));
    } 
    else if (piece == "Bishop") {
        return (abs(x1 - x2) == abs(y1 - y2));
    } 
    else if (piece == "Rook") {
        return (x1 == x2 || y1 == y2);
    } 
    else if (piece == "Queen") {
        return (x1 == x2 || y1 == y2 || abs(x1 - x2) == abs(y1 - y2));
    } 
    else if (piece == "King") {
        return (abs(x1 - x2) <= 1 && abs(y1 - y2) <= 1);
    }

    return false;
}

int main() {
    string piece, current_position, target_position;

    cin >> piece;

    cin >> current_position;
  
    cin >> target_position;
    
    if (can_move(piece, current_position, target_position)) {
        cout << "true\n";
    } else {
        cout << "f alse\n";
    }

    return 0;
}
