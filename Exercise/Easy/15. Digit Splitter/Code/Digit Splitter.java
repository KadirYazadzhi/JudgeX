import java.util.Scanner;

public class DigitSplitter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();
        digitSplitter(number);
    }

    public static void digitSplitter(int number) {
        String numStr = Integer.toString(number);
        for (char c : numStr.toCharArray()) {
            System.out.println(c);
        }
    }
}
