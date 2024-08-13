using System;
using System.Linq;

class Program {
    static void Main() {
        string input = Console.ReadLine();
        
        string[] words = input.Split(' ');
        Array.Sort(words);
        
        string result = string.Join(", ", words);
        Console.WriteLine(result);
    }
}


