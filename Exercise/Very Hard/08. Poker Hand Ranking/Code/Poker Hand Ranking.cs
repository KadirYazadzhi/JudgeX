using System;
using System.Collections.Generic;

class Program {
    static int GetFace(string c) {
        if (c.Length == 2) {
            if (c[0] >= '2' && c[0] <= '9')
                return c[0] - '0';
            else if (c[0] == 'J')
                return 11;
            else if (c[0] == 'Q')
                return 12;
            else if (c[0] == 'K')
                return 13;
            else if (c[0] == 'A')
                return 1;
        } else
            return 10;
        return 0;
    }

    static int GetSuit(string c) {
        switch (c[c.Length - 1]) {
            case 'h':
                return 3;
            case 'd':
                return 2;
            case 's':
                return 1;
            case 'c':
                return 0;
        }
        return 0;
    }

    static string PokerHandRanking(List<string> hand) {
        int[] face_count = new int[14];
        int[] suit_count = new int[4];

        Array.Clear(face_count, 0, face_count.Length);
        Array.Clear(suit_count, 0, suit_count.Length);

        foreach (var card in hand) {
            int tface = GetFace(card);
            int tsuit = GetSuit(card);

            face_count[tface]++;
            suit_count[tsuit]++;
        }

        return "";
    }

    static void Main() {
        List<string> hand = new List<string>();
        string card;

        for (int i = 0; i < 5; ++i) {
            card = Console.ReadLine();
            hand.Add(card);
        }

        string result = PokerHandRanking(hand);
        Console.WriteLine(result);
    }
}



