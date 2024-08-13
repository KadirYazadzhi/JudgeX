import java.util.Scanner;

public class Main {
    static int countWords(String line) {
        String[] words = line.split("\\s+");
        return words.length;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line = scanner.nextLine();
        scanner.close();

        System.out.println(countWords(line));
    }
}



