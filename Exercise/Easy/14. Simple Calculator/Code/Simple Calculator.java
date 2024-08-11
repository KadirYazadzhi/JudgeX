import java.util.Scanner;
import java.lang.Math;

public class SimpleCalculator {

    public static void simpleCalculator(double num1, double num2, char operatorChar) {
        double result;
        switch (operatorChar) {
            case '+':
                result = num1 + num2;
                System.out.println(result);
                break;
            case '-':
                result = num1 - num2;
                System.out.println(result);
                break;
            case '*':
                result = num1 * num2;
                System.out.println(result);
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                    System.out.println(result);
                } else {
                    System.out.println("Cannot divide by zero");
                }
                break;
            case '%':
                if (num2 != 0) {
                    result = num1 % num2;
                    System.out.println(result);
                } else {
                    System.out.println("Cannot divide by zero");
                }
                break;
            case '^':
                result = Math.pow(num1, num2);
                System.out.println(result);
                break;
            default:
                System.out.println("Invalid operator");
                break;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num1 = scanner.nextDouble();
        double num2 = scanner.nextDouble();
        char operatorChar = scanner.next().charAt(0);

        simpleCalculator(num1, num2, operatorChar);
    }
}



