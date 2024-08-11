import java.util.Scanner;

public class SqrtNumber {
    public static void sqrtNumber(int num) {
        System.out.println(num * num);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        scanner.close();

        sqrtNumber(num);
    }
}


