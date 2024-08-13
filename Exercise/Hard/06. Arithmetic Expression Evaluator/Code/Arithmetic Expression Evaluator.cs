using System;

class Program {
    static void Main() {
        string expression = Console.ReadLine();

        double result = EvaluateExpression(expression);
        Console.WriteLine(result);
    }

    static double EvaluateExpression(string expression) {
        var dataTable = new System.Data.DataTable();
        var result = dataTable.Compute(expression, "");
        return Convert.ToDouble(result);
    }
}



