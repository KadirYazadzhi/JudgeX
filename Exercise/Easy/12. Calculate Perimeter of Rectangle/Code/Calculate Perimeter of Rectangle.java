import java.util.Scanner;

public class CalcPer {
    public static void calcPer(int length, int width) {
        int result = 2 * (length + width);
        System.out.println(result);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int length = scanner.nextInt();
        int width = scanner.nextInt();
        scanner.close();

        calcPer(length, width);
    }
}


