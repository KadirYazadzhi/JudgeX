using System;

class Program {
    static bool cFuge(int n, int k) {
        if (n == 1 || k == 1) {
            return false;
        }
        if (n % 2 != 0) {
            return n == k;
        }
        return (n - k) % 2 == 0;
    }

    static void Main() {
        string input = Console.ReadLine();
        string[] parts = input.Split(',');

        if (parts.Length == 2) {
            int n = int.Parse(parts[0]);
            int k = int.Parse(parts[1]);

            if (cFuge(n, k)) {
                Console.WriteLine("true");
            } else {
                Console.WriteLine("false");
            }
        }
    }
}



