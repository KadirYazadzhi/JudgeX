using System;

class Program {
    static void Main() {
        string input = Console.ReadLine();

        int shift = int.Parse(Console.ReadLine());

        string encryptedText = CaesarCipher(input, shift);
        Console.WriteLine(encryptedText);
    }

    static string CaesarCipher(string input, int shift) {
        char[] chars = input.ToCharArray();

        for (int i = 0; i < chars.Length; i++) {
            if (char.IsLetter(chars[i])) {
                char baseChar = char.IsUpper(chars[i]) ? 'A' : 'a';
                chars[i] = (char)(((chars[i] + shift - baseChar) % 26) + baseChar);
            }
        }

        return new string(chars);
    }
}



