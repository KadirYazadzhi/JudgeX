import java.util.Scanner;

public class SumNumbers {
    public static void sumNumbers(int num1, int num2) {
        System.out.println(num1 + num2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        scanner.close();

        sumNumbers(num1, num2);
    }
}



