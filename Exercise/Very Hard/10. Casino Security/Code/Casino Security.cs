using System;

class Program {
    static string CasinoSecurity(string s) {
        int thiefPos = s.IndexOf('T');
        int moneyPos = s.IndexOf('$');
        int guardPos = s.IndexOf('G');

        if (thiefPos == -1 || moneyPos == -1) {
            return "Safe";
        }

        if ((thiefPos < moneyPos && moneyPos < guardPos) ||
            (guardPos < moneyPos && moneyPos < thiefPos))
        {
            return "Safe";
        }

        return "ALARM!";
    }

    static void Main() {
        string input = Console.ReadLine();

        string result = CasinoSecurity(input);
        Console.WriteLine(result);
    }
}



