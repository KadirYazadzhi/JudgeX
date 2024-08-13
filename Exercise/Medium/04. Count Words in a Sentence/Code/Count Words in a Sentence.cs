using System;

class Program {
    static int CountWords(string line) {
        string[] words = line.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
        return words.Length;
    }

    static void Main() {
        string line = Console.ReadLine();
        Console.WriteLine(CountWords(line));
    }
}


