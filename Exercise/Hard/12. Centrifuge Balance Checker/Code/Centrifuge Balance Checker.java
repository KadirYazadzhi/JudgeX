import java.util.Scanner;

public class Main {
    public static boolean cFuge(int n, int k) {
        if (n == 1 || k == 1) {
            return false;
        }
        if (n % 2 != 0) {
            return n == k;
        }
        return (n - k) % 2 == 0;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        String[] parts = input.split(",");
        if (parts.length == 2) {
            int n = Integer.parseInt(parts[0]);
            int k = Integer.parseInt(parts[1]);

            if (cFuge(n, k)) {
                System.out.println("true");
            } else {
                System.out.println("false");
            }
        }
        scanner.close();
    }
}



