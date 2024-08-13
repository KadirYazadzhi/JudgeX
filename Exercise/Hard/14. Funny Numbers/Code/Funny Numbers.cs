using System;

class Program {
    static int FunnyNumber(int n, int p) {
        int sum = 0;
        string str = n.ToString();
        
        for (int i = 0; i < str.Length; i++) {
            int digit = str[i] - '0';
            sum += (int)Math.Pow(digit, p + i);
        }

        if (sum % n == 0) {
            return sum / n;
        } else {
            return -1;
        }
    }

    static void Main() {
        int n = int.Parse(Console.ReadLine());

        int p = int.Parse(Console.ReadLine());
        
        Console.WriteLine(FunnyNumber(n, p));
    }
}



