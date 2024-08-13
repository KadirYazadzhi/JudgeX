using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static int FindMissingNumber(List<int> arr) {
        int expectedSum = (arr.First() + arr.Last()) * (arr.Count + 1) / 2;
        int actualSum = arr.Sum();
        return expectedSum - actualSum;
    }

    static void Main() {
        string line = Console.ReadLine();
        
        List<int> arr = line.Split(',').Select(int.Parse).ToList();
        
        Console.WriteLine(FindMissingNumber(arr));
    }
}


