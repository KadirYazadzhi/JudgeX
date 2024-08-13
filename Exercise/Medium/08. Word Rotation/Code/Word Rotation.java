import java.util.Scanner;

public class Main {
    public static void rotateRight(StringBuilder str) {
        char last = str.charAt(str.length() - 1);
        str.deleteCharAt(str.length() - 1);
        str.insert(0, last);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        scanner.nextLine(); 
        
        String word = scanner.nextLine();
        
        StringBuilder str = new StringBuilder(word);
        for (int i = 0; i < n; i++) {
            if (i > 0) System.out.print(", ");
            System.out.print(str);
            rotateRight(str);
        }
        System.out.println();
    }
}



