using System;

class Program {
    static string IsVampireNumber(int n) {
        string str = n.ToString();
        int len = str.Length;
        
        if (n < 100) {
            return "Normal Number";
        }
        
        char[] digits = str.ToCharArray();
        Array.Sort(digits);
        
        if (len % 2 == 0) {
            do {
                string part1 = new string(digits, 0, len / 2);
                string part2 = new string(digits, len / 2, len / 2);
              
                int num1 = int.Parse(part1);
                int num2 = int.Parse(part2);
                
                if (num1 * num2 == n && part1[0] != '0' && part2[0] != '0') {
                    return "True Vampire";
                }
                
            }
            while (NextPermutation(digits));
        }
        else {
         
            do {
                for (int i = 1; i < len; ++i) {
                    string part1 = new string(digits, 0, i);
                    string part2 = new string(digits, i, len - i);
                    
                    int num1 = int.Parse(part1);
                    int num2 = int.Parse(part2);
                    
                    if (num1 * num2 == n && part1[0] != '0' && part2[0] != '0') {
                        return "Pseudovampire";
                    }
                }
            } 
            while (NextPermutation(digits));
        }
        
        return "Normal Number";
    }
    

    static bool NextPermutation(char[] array) {
        int i = array.Length - 2;
        while (i >= 0 && array[i] >= array[i + 1]) {
            i--;
        }
        
        if (i < 0) {
            return false;
        }
        
        int j = array.Length - 1;
        while (array[j] <= array[i]) {
            j--;
        }
        
        char temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
        Array.Reverse(array, i + 1, array.Length - i - 1);
        
        return true;
    }
    
    static void Main() {
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(IsVampireNumber(n));
    }
}



