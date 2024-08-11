using System;

class Program {
    static void Main() {
        int number = int.Parse(Console.ReadLine());
        DigitSplitter(number);
    }

    static void DigitSplitter(int number) {
        string numStr = number.ToString();
        foreach (char c in numStr) {
            Console.WriteLine(c);
        }
    }
}


