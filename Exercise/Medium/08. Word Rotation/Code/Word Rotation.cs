using System;

class Program {
    static void RotateRight(ref string str) {
        str = str[str.Length - 1] + str.Substring(0, str.Length - 1);
    }

    static void Main() {
        int n = int.Parse(Console.ReadLine());
        
        string word = Console.ReadLine();
        
        for (int i = 0; i < n; i++) {
            if (i > 0) Console.Write(", ");
            Console.Write(word);
            RotateRight(ref word);
        }
        Console.WriteLine();
    }
}


