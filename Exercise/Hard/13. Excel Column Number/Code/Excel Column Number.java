import java.util.Scanner;

public class ExcelColumnNumber {

    public static int titleToNumber(String s) {
        int result = 0;
        for (char c : s.toCharArray()) {
            result = result * 26 + (c - 'A' + 1);
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        
        int number = titleToNumber(s);
        System.out.println(number);
        
        scanner.close();
    }
}




