import java.util.Scanner;

public class PasswordStrengthValidator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String password = scanner.nextLine();

        if (isStrongPassword(password)) {
            System.out.println("Strong");
        } 
        else {
            System.out.println("Weak");
        }
    }

    public static boolean isStrongPassword(String password) {
        boolean hasLength = password.length() >= 8;
        boolean hasUpperCase = false;
        boolean hasLowerCase = false;
        boolean hasDigit = false;
        boolean hasSpecialChar = false;

        for (char ch : password.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                hasUpperCase = true;
            } 
            else if (Character.isLowerCase(ch)) {
                hasLowerCase = true;
            } 
            else if (Character.isDigit(ch)) {
                hasDigit = true;
            } 
            else if ("!@#$%^&*()-_+=<>?".indexOf(ch) != -1) {
                hasSpecialChar = true;
            }
        }

        return hasLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
    }
}




