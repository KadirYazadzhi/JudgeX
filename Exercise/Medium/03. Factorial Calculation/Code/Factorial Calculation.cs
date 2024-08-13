using System;

class Program {
    static void FactorialCalculation(int num) {
        int factorial = num;
        for (int i = num - 1; i > 0; i--) {
            factorial *= i;
        }
        Console.WriteLine(factorial);
    }

    static void Main() {
        int num = int.Parse(Console.ReadLine());
        FactorialCalculation(num);
    }
}


