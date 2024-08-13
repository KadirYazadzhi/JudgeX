#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

bool can_move(const char* piece, const char* current_position, const char* target_position) {
    int x1 = toupper(current_position[0]) - 'A';
    int y1 = current_position[1] - '1';
    int x2 = toupper(target_position[0]) - 'A';
    int y2 = target_position[1] - '1';

    if (strcmp(piece, "Pawn") == 0) {
        return (x1 == x2 && (y2 == y1 + 1 || (y1 == 1 && y2 == 3)));
    }
    else if (strcmp(piece, "Knight") == 0) {
        return ((abs(x1 - x2) == 2 && abs(y1 - y2) == 1) || (abs(x1 - x2) == 1 && abs(y1 - y2) == 2));
    }
    else if (strcmp(piece, "Bishop") == 0) {
        return (abs(x1 - x2) == abs(y1 - y2));
    }
    else if (strcmp(piece, "Rook") == 0) {
        return (x1 == x2 || y1 == y2);
    }
    else if (strcmp(piece, "Queen") == 0) {
        return (x1 == x2 || y1 == y2 || abs(x1 - x2) == abs(y1 - y2));
    }
    else if (strcmp(piece, "King") == 0) {
        return (abs(x1 - x2) <= 1 && abs(y1 - y2) <= 1);
    }

    return false;
}

int main() {
    char piece[10], current_position[3], target_position[3];
    scanf("%s", piece);
    scanf("%s", current_position);
    scanf("%s", target_position);
    
    if (can_move(piece, current_position, target_position)) {
        printf("true\n");
    } else {
        printf("false\n");
    }

    return 0;
}