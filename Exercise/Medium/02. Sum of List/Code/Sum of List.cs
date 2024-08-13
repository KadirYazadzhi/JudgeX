using System;

class Program
{
    static void SumList()
    {
        string line = Console.ReadLine();
        string[] numbers = line.Split(' ');

        int sum = 0;
        foreach (string num in numbers)
        {
            sum += int.Parse(num);
        }

        Console.WriteLine(sum);
    }

    static void Main()
    {
        SumList();
    }
}


