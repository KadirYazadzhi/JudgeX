using System;

class Program {
    static int RomanToInt(string s) {
        var romanValues = new System.Collections.Generic.Dictionary<char, int> {
            {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},
            {'C', 100}, {'D', 500}, {'M', 1000}
        };

        int result = 0;
        int prevValue = 0;

        for (int i = s.Length - 1; i >= 0; i--) {
            int currentValue = romanValues[s[i]];

            if (currentValue >= prevValue) {
                result += currentValue;
            }
            else {
                result -= currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    static bool IsValidRoman(string s) {
        foreach (char c in s) {
            if (c != 'I' && c != 'V' && c != 'X' && c != 'L' &&
                c != 'C' && c != 'D' && c != 'M')
            {
                return false;
            }
        }
        return true;
    }

    static void Main() {
        string roman = Console.ReadLine();

        if (!IsValidRoman(roman)) {
            Console.WriteLine("Error: Invalid Roman numeral");
        }
        else {
            int arabic = RomanToInt(roman);
            Console.WriteLine(arabic);
        }
    }
}



