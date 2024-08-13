import java.util.Scanner;

public class Main {
    static boolean palindromeCheck(String line) {
        for (int i = 0; i < line.length() / 2; i++) {
            if (line.charAt(i) != line.charAt(line.length() - i - 1)) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line = scanner.nextLine();

        if (palindromeCheck(line)) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }
    }
}



