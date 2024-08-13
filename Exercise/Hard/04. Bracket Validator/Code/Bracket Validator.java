import java.util.Scanner;
import java.util.Stack;

public class BracketValidator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String expression = scanner.nextLine().trim();

        if (isValidExpression(expression)) {
            System.out.println("True");
        } 
        else {
            System.out.println("False");
        }
    }

    public static boolean isValidExpression(String expression) {
        Stack<Character> stack = new Stack<>();

        for (char ch : expression.toCharArray()) {
            if (isOpeningBracket(ch)) {
                stack.push(ch);
            } 
            else {
                if (stack.isEmpty() || !isValidPair(stack.pop(), ch)) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }

    public static boolean isOpeningBracket(char ch) {
        return ch == '(' || ch == '{' || ch == '[';
    }

    public static boolean isValidPair(char opening, char closing) {
        return (opening == '(' && closing == ')') ||
               (opening == '{' && closing == '}') ||
               (opening == '[' && closing == ']');
    }
}



