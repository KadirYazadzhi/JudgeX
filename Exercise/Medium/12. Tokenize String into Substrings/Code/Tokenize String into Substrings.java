import java.util.Scanner;

public class TokenizeString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        char delimiter = scanner.next().charAt(0);

        String[] tokens = input.split(String.valueOf(delimiter));

        for (String token : tokens) {
            System.out.println(token);
        }

        scanner.close();
    }
}





