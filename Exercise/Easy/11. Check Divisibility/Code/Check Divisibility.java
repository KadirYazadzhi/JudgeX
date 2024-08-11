import java.util.Scanner;

public class CheckDivisibility {
    public static void checkDivisibility(int num1, int num2) {
        if (num1 % num2 == 0) {
            System.out.println("Divisible");
        }
        else {
            System.out.println("Not Divisible");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        scanner.close();

        checkDivisibility(num1, num2);
    }
}


