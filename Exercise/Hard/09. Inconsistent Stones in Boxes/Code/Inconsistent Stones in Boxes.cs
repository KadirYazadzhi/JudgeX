using System;

class Program {
    static int FindInconsistentBox() {
        for (int i = 1; i <= 1000; ++i) {
            int stones = 0;  
            for (int j = 1; j <= 1000; ++j) {
                if (i == j) {
                    stones += i;  
                }
            }
            if (stones != i)
            {
                return i;  
            }
        }
        return -1;  
    }

    static void Main() {
        int inconsistentBox = FindInconsistentBox();
        Console.WriteLine(inconsistentBox);
    }
}

