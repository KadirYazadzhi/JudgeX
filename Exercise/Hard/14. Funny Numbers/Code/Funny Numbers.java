import java.util.Scanner;

public class FunnyNumber {
    public static int funnyNumber(int n, int p) {
        int sum = 0;
        String str = Integer.toString(n);
        
        for (int i = 0; i < str.length(); i++) {
            int digit = Character.getNumericValue(str.charAt(i));
            sum += Math.pow(digit, p + i);
        }

        if (sum % n == 0) {
            return sum / n;
        } else {
            return -1;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int p = scanner.nextInt();
        
        System.out.println(funnyNumber(n, p));
        scanner.close();
    }
}




