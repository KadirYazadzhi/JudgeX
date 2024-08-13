import java.util.Scanner;

public class CaesarCipher {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        int shift = scanner.nextInt();

        String encryptedText = caesarCipher(input, shift);
        System.out.println(encryptedText);
    }

    public static String caesarCipher(String input, int shift) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);

            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                ch = (char) ((ch - base + shift) % 26 + base);
            }

            result.append(ch);
        }

        return result.toString();
    }
}




