using System;

class Program {
    static void Main() {
        string input = Console.ReadLine();
        char delimiter = Console.ReadLine()[0];

        string[] tokens = input.Split(delimiter);

        foreach (string token in tokens) {
            Console.WriteLine(token);
        }
    }
}


