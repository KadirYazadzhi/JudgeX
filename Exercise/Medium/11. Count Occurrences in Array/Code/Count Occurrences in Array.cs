using System;

class Program {
    static void ReadVector(int[] numbers) {
        string line = Console.ReadLine();
        string[] tokens = line.Split(' ');

        for (int i = 0; i < numbers.Length; i++) {
            numbers[i] = int.Parse(tokens[i]);
        }
    }

    static void FindNumber(int[] numbers, int num) {
        int counter = 0;
        foreach (int number in numbers) {
            if (number == num) {
                counter++;
            }
        }
        Console.WriteLine(counter);
    }

    static void Main() {
        int n = int.Parse(Console.ReadLine());
        int[] numbers = new int[n];

        ReadVector(numbers);

        int num = int.Parse(Console.ReadLine());

        FindNumber(numbers, num);
    }
}


