import java.util.Scanner;

public class MaxNumbers {
    public static void maxNumbers(int num1, int num2) {
        if (num1 > num2) {
            System.out.println(num1);
        }
        else {
            System.out.println(num2);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        scanner.close();

        sumNumbers(num1, num2);
    }
}


