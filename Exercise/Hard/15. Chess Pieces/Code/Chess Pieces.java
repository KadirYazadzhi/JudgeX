import java.util.Scanner;

public class ChessPieces {
    public static boolean canMove(String piece, String currentPosition, String targetPosition) {
        int x1 = Character.toUpperCase(currentPosition.charAt(0)) - 'A';
        int y1 = currentPosition.charAt(1) - '1';
        int x2 = Character.toUpperCase(targetPosition.charAt(0)) - 'A';
        int y2 = targetPosition.charAt(1) - '1';

        switch (piece) {
            case "Pawn":
                return (x1 == x2 && (y2 == y1 + 1 || (y1 == 1 && y2 == 3)));
            case "Knight":
                return ((Math.abs(x1 - x2) == 2 && Math.abs(y1 - y2) == 1) || (Math.abs(x1 - x2) == 1 && Math.abs(y1 - y2) == 2));
            case "Bishop":
                return (Math.abs(x1 - x2) == Math.abs(y1 - y2));
            case "Rook":
                return (x1 == x2 || y1 == y2);
            case "Queen":
                return (x1 == x2 || y1 == y2 || Math.abs(x1 - x2) == Math.abs(y1 - y2));
            case "King":
                return (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1);
            default:
                return false;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String piece = scanner.nextLine();
        String currentPosition = scanner.nextLine();
        String targetPosition = scanner.nextLine();
        
        System.out.println(canMove(piece, currentPosition, targetPosition));
        scanner.close();
    }
}




