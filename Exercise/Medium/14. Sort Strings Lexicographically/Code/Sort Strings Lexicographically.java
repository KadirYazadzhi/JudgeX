import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        String[] words = input.split(" ");
        Arrays.sort(words);

        String result = String.join(", ", words);
        System.out.println(result);
    }
}



