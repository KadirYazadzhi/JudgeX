using System;

public class Program {
    public static int TitleToNumber(string s) {
        int result = 0;
        foreach (char c in s) {
            result = result * 26 + (c - 'A' + 1);
        }
        return result;
    }

    public static void Main() {
        string s = Console.ReadLine();
        
        int number = TitleToNumber(s);
        Console.WriteLine(number);
    }
}
