#include <stdio.h>
#include <stdbool.h>

char checkWinner(char board[3][3]) {
    for (int i = 0; i < 3; ++i) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '#') {
            return board[i][0];
        }
    }
    
    for (int i = 0; i < 3; ++i) {
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != '#') {
            return board[0][i];
        }
    }
    
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '#') {
        return board[0][0];
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '#') {
        return board[0][2];
    }
    
    return '#'; 
}

void printBoard(char board[3][3]) {
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            printf("%c ", board[i][j]);
        }
        printf("\n");
    }
}

void ticTacToe(char board[3][3]) {
    char winner = checkWinner(board);
    
    if (winner == 'X') {
        printf("Player 1 wins\n");
    } else if (winner == 'O') {
        printf("Player 2 wins\n");
    } else {
        printf("It's a Tie\n");
    }
}

int main() {
    char board[3][3];

    for (int i = 0; i < 3; ++i) {
        scanf("%c %c %c", &board[i][0], &board[i][1], &board[i][2]);
    }

    printBoard(board);
    
    ticTacToe(board);
    
    return 0;
}

