using System;

class Program {
    static string Space(string s) {
        int d1 = s.IndexOf("[");
        int d2 = d1;
        for (int i = d1 + 1; i < s.Length; i++) {
            if (s[i] == '[') d1 = i;
            if (s[i] == ']') {
                d2 = i;
                break;
            }
        }
        string rep = "";
        int d = int.Parse(s.Substring(d1 + 1, 1));
        for (int i = 0; i < d; i++) rep += s.Substring(d1 + 2, d2 - d1 - 2);
        return s.Substring(0, d1) + rep + s.Substring(d2 + 1);
    }

    static string SpaceMessage(string s) {
        while (s.Contains("["))
            s = Space(s);
        return s;
    }

    static void Main(string[] args) {
        string s = Console.ReadLine();
        Console.WriteLine(SpaceMessage(s));
    }
}



