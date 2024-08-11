using System;

public class SumNumbers {
    public static void SumNumbersMethod(int num1, int num2) {
        Console.WriteLine(num1 + num2);
    }

    public static void Main(string[] args) {
        int num1 = int.Parse(Console.ReadLine());
        int num2 = int.Parse(Console.ReadLine());

        SumNumbersMethod(num1, num2);
    }
}


