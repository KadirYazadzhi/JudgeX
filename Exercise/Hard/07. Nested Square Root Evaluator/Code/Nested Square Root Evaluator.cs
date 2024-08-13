using System;

public class Program {
    public static double EvaluateExpression(string expression) {
        expression = expression.Replace("√", "Math.Sqrt");
        try {
            var engine = new CSharpScriptEngine();
            var result = engine.Evaluate(expression);
            return Convert.ToDouble(result);
        }
        catch (Exception ex) {
            Console.WriteLine($"Error: {ex.Message}");
            return double.NaN;
        }
    }

    public static void Main() {
        string expression = Console.ReadLine();
        double result = EvaluateExpression(expression);
        Console.WriteLine(result);
    }
}

public class CSharpScriptEngine {
    public object Evaluate(string expression) {
        return Microsoft.CodeAnalysis.CSharp.Scripting.CSharpScript.EvaluateAsync(expression).Result;
    }
}


