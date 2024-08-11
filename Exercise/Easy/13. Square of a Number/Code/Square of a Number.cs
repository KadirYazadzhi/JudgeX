using System;

public class SqrtNumber {
    public static void sqrtNumber(int num) {
        num = num * num;
        Console.WriteLine(num);
    }

    public static void Main(string[] args) {
        int num = int.Parse(Console.ReadLine());

        sqrtNumber(num);
    }
}

