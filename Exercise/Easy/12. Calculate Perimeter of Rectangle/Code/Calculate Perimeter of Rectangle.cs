using System;

public class CalcPer {
    public static void calcPer(int length, int width) {
        int result = 2 * (length + width);
        Console.WriteLine(result);
    }

    public static void Main(string[] args) {
        int length = int.Parse(Console.ReadLine());
        int width = int.Parse(Console.ReadLine());

        calcPer(length, width);
    }
}

