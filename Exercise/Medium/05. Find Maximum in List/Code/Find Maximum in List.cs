using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        string line = Console.ReadLine();

        string[] tokens = line.Split(',');
        List<int> numbers = new List<int>();

        foreach (string token in tokens) {
            int num;
            if (int.TryParse(token, out num)) {
                numbers.Add(num);
            }
        }

        int max = int.MinValue;
        foreach (int num in numbers) {
            if (num > max) {
                max = num;
            }
        }

        Console.WriteLine(max);
    }
}


