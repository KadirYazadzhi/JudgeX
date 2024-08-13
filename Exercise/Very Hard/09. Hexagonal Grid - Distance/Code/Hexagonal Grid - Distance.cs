using System;

class Program {
    static bool PalindromeCheck(string line) {
        for (int i = 0; i < line.Length / 2; i++) {
            if (line[i] != line[line.Length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    static void Main() {
        string line = Console.ReadLine();

        if (PalindromeCheck(line)) {
            Console.WriteLine("True");
        }
        else {
            Console.WriteLine("False");
        }
    }
}


