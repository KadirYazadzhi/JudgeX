using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static void SortAndFilter(List<int> arr) {
        int count5 = arr.Count(n => n == 5);
        int count6 = arr.Count(n => n == 6);
        int count7 = arr.Count(n => n == 7);

        for (int i = 0; i < count5; i++) Console.Write("5 ");
        for (int i = 0; i < count6; i++) Console.Write("6 ");
        for (int i = 0; i < count7; i++) Console.Write("7 ");
        Console.WriteLine();
    }

    static void Main() {
        string line = Console.ReadLine();
        
        List<int> arr = line.Split(' ')
                            .Select(int.Parse)
                            .Where(n => n >= 5 && n <= 7)
                            .ToList();
        
        SortAndFilter(arr);
    }
}

