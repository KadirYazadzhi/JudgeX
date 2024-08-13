using System;

class Program {
    static bool CanMove(string piece, string currentPosition, string targetPosition) {
        int x1 = char.ToUpper(currentPosition[0]) - 'A';
        int y1 = currentPosition[1] - '1';
        int x2 = char.ToUpper(targetPosition[0]) - 'A';
        int y2 = targetPosition[1] - '1';

        if (piece == "Pawn") {
            return (x1 == x2 && (y2 == y1 + 1 || (y1 == 1 && y2 == 3)));
        } else if (piece == "Knight") {
            return ((Math.Abs(x1 - x2) == 2 && Math.Abs(y1 - y2) == 1) || (Math.Abs(x1 - x2) == 1 && Math.Abs(y1 - y2) == 2));
        } else if (piece == "Bishop") {
            return (Math.Abs(x1 - x2) == Math.Abs(y1 - y2));
        } else if (piece == "Rook") {
            return (x1 == x2 || y1 == y2);
        } else if (piece == "Queen") {
            return (x1 == x2 || y1 == y2 || Math.Abs(x1 - x2) == Math.Abs(y1 - y2));
        } else if (piece == "King") {
            return (Math.Abs(x1 - x2) <= 1 && Math.Abs(y1 - y2) <= 1);
        }

        return false;
    }

    static void Main() {
        string piece = Console.ReadLine();

        string currentPosition = Console.ReadLine();

        string targetPosition = Console.ReadLine();
        
        Console.WriteLine(CanMove(piece, currentPosition, targetPosition));
    }
}



