#include <iostream>
#include <vector>

using namespace std;

char checkWinner(vector<vector<char>>& board) {
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

void printBoard(vector<vector<char>>& board) {
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            cout << board[i][j] << " ";
        }
        cout << endl;
    }
}

void ticTacToe(vector<vector<char>>& board) {
    char winner = checkWinner(board);
    
    if (winner == 'X') {
        cout << "Player 1 wins" << endl;
    } else if (winner == 'O') {
        cout << "Player 2 wins" << endl;
    } else {
        cout << "It's a Tie" << endl;
    }
}

int main() {
    vector<vector<char>> board(3, vector<char>(3));

    for (int i = 0; i < 3; ++i) {
        cin >> board[i][0] >> board[i][1] >> board[i][2];
    }

    printBoard(board);
    
    ticTacToe(board);
    
    return 0;
}
