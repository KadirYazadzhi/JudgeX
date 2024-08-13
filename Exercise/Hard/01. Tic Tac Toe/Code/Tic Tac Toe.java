import java.util.Scanner;

public class TicTacToe {
    public static char checkWinner(char[][] board) {
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

    public static void printBoard(char[][] board) {
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void ticTacToe(char[][] board) {
        char winner = checkWinner(board);
        
        if (winner == 'X') {
            System.out.println("Player 1 wins");
        } else if (winner == 'O') {
            System.out.println("Player 2 wins");
        } else {
            System.out.println("It's a Tie");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char[][] board = new char[3][3];

        for (int i = 0; i < 3; ++i) {
            String[] line = scanner.nextLine().split(" ");
            for (int j = 0; j < 3; ++j) {
                board[i][j] = line[j].charAt(0);
            }
        }
        printBoard(board);
        
        ticTacToe(board);
    }
}




