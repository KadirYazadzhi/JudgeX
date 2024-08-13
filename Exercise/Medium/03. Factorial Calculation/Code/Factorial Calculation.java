import java.util.Scanner;

public class Main {
    static void factorialCalculation(int num) {
        int factorial = num;
        for (int i = num - 1; i > 0; i--) {
            factorial *= i;
        }
        System.out.println(factorial);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        scanner.close();
        
        factorialCalculation(num);
    }
}



