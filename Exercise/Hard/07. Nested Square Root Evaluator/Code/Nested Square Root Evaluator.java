import java.util.Scanner;

public class NestedSquareRootEvaluator {

    public static double evaluateExpression(String expression) {
        expression = expression.replace("√", "Math.sqrt");

        try {
            javax.script.ScriptEngineManager mgr = new javax.script.ScriptEngineManager();
            javax.script.ScriptEngine engine = mgr.getEngineByName("JavaScript");
            Object result = engine.eval(expression);
            return Double.parseDouble(result.toString());
        } 
        catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return Double.NaN;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    
        String expression = scanner.nextLine();
        double result = evaluateExpression(expression);
        System.out.println(result);
    }
}




