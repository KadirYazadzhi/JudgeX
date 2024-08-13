import java.util.Scanner;

public class ArithmeticExpressionEvaluator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String expression = scanner.nextLine();

        double result = evaluateExpression(expression);
        System.out.println(result);
    }

    public static double evaluateExpression(String expression) {
        org.mozilla.javascript.Context rhino = org.mozilla.javascript.Context.enter();
        try {
            org.mozilla.javascript.Scriptable scope = rhino.initStandardObjects();
            Object result = rhino.evaluateString(scope, expression, "ArithmeticExpression", 1, null);
            return Double.parseDouble(org.mozilla.javascript.Context.toString(result));
        } 
        finally {
            org.mozilla.javascript.Context.exit();
        }
    }
}


