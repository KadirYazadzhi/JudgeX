using System;

public class CheckDivisibility {
    public static void checkDivisibility(int num1, int num2) {
        if (num1 % num2 == 0) {
            Console.WriteLine("Divisible");
        }
        else {
            Console.WriteLine("Not Divisible");
        }
    }

    public static void Main(string[] args) {
        int num1 = int.Parse(Console.ReadLine());
        int num2 = int.Parse(Console.ReadLine());

        checkDivisibility(num1, num2);
    }
}

