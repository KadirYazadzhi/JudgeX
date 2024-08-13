import java.util.Arrays;
import java.util.Scanner;

public class Main {
    
    static String isVampireNumber(int n) {
        String str = Integer.toString(n);
        int len = str.length();
        
        if (n < 100) {
            return "Normal Number";
        }
        
        char[] digits = str.toCharArray();
        Arrays.sort(digits);
        
        if (len % 2 == 0) {
            do {
                String part1 = new String(Arrays.copyOfRange(digits, 0, len / 2));
                String part2 = new String(Arrays.copyOfRange(digits, len / 2, len));
                
                int num1 = Integer.parseInt(part1);
                int num2 = Integer.parseInt(part2);
                
                if (num1 * num2 == n && part1.charAt(0) != '0' && part2.charAt(0) != '0') {
                    return "True Vampire";
                }
                
            } while (nextPermutation(digits));
        }
        else {
            do {
                for (int i = 1; i < len; ++i) {
                    String part1 = new String(Arrays.copyOfRange(digits, 0, i));
                    String part2 = new String(Arrays.copyOfRange(digits, i, len));
                    
                    int num1 = Integer.parseInt(part1);
                    int num2 = Integer.parseInt(part2);
                    
                    if (num1 * num2 == n && part1.charAt(0) != '0' && part2.charAt(0) != '0') {
                        return "Pseudovampire";
                    }
                }
            } while (nextPermutation(digits));
        }
        
        return "Normal Number";
    }
    
    static boolean nextPermutation(char[] array) {
        int i = array.length - 2;
        while (i >= 0 && array[i] >= array[i + 1]) {
            i--;
        }
        
        if (i < 0) {
            return false;
        }
        
        int j = array.length - 1;
        while (array[j] <= array[i]) {
            j--;
        }
        
        char temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
        Arrays.sort(array, i + 1, array.length);
        
        return true;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.println(isVampireNumber(n));
        scanner.close();
    }
}




