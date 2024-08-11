using System;

public class Program
{
    public static void SimpleCalculator(double num1, double num2, char operatorChar)
    {
        double result;
        switch (operatorChar)
        {
            case '+':
                result = num1 + num2;
                Console.WriteLine(result);
                break;
            case '-':
                result = num1 - num2;
                Console.WriteLine(result);
                break;
            case '*':
                result = num1 * num2;
                Console.WriteLine(result);
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                    Console.WriteLine(result);
                }
                else {
                    Console.WriteLine("Cannot divide by zero");
                }
                break;
            case '%':
                if (num2 != 0) {
                    result = num1 % num2;
                    Console.WriteLine(result);
                }
                else {
                    Console.WriteLine("Cannot divide by zero");
                }
                break;
            case '^':
                result = Math.Pow(num1, num2);
                Console.WriteLine(result);
                break;
            default:
                Console.WriteLine("Invalid operator");
                break;
        }
    }

    public static void Main(string[] args) {
        double num1 = double.Parse(Console.ReadLine());
        double num2 = double.Parse(Console.ReadLine());
        char operatorChar = Console.ReadLine()[0];

        SimpleCalculator(num1, num2, operatorChar);
    }
}


