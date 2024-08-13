using System;

public class TicTacToe {
    public static char CheckWinner(char[,] board) {
        for (int i = 0; i < 3; ++i) {
            if (board[i, 0] == board[i, 1] && board[i, 1] == board[i, 2] && board[i, 0] != '#') {
                return board[i, 0];
            }
        }
        
        for (int i = 0; i < 3; ++i) {
            if (board[0, i] == board[1, i] && board[1, i] == board[2, i] && board[0, i] != '#') {
                return board[0, i];
            }
        }
        
        if (board[0, 0] == board[1, 1] && board[1, 1] == board[2, 2] && board[0, 0] != '#') {
            return board[0, 0];
        }
        if (board[0, 2] == board[1, 1] && board[1, 1] == board[2, 0] && board[0, 2] != '#') {
            return board[0, 2];
        }
        
        return '#';
    }


    public static void PrintBoard(char[,] board) {
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                Console.Write(board[i, j] + " ");
            }
            Console.WriteLine();
        }
    }


    public static void TicTacToe(char[,] board) {
        char winner = CheckWinner(board);
        
        if (winner == 'X') {
            Console.WriteLine("Player 1 wins");
        } 
        else if (winner == 'O') {
            Console.WriteLine("Player 2 wins");
        } 
        else {
            Console.WriteLine("It's a Tie");
        }
    }

    public static void Main() {
        char[,] board = new char[3, 3];

        for (int i = 0; i < 3; ++i) {
            string[] line = Console.ReadLine().Split(' ');
            for (int j = 0; j < 3; ++j) {
                board[i, j] = char.Parse(line[j]);
            }
        }
        PrintBoard(board);
        
        TicTacToe(board);
    }
}



