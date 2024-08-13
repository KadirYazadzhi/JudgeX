import java.util.*;

public class Main {
    static int getFace(String c) {
        if (c.length() == 2) {
            if (c.charAt(0) >= '2' && c.charAt(0) <= '9')
                return c.charAt(0) - '0';
            else if (c.charAt(0) == 'J')
                return 11;
            else if (c.charAt(0) == 'Q')
                return 12;
            else if (c.charAt(0) == 'K')
                return 13;
            else if (c.charAt(0) == 'A')
                return 1;
        } else
            return 10;
        return 0;
    }

    static int getSuit(String c) {
        switch (c.charAt(c.length() - 1)) {
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

    static String pokerHandRanking(List<String> hand) {
        int[] face_count = new int[14];
        int[] suit_count = new int[4];

        Arrays.fill(face_count, 0);
        Arrays.fill(suit_count, 0);

        for (String card : hand) {
            int tface = getFace(card);
            int tsuit = getSuit(card);

            face_count[tface]++;
            suit_count[tsuit]++;
        }

        return "";
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> hand = new ArrayList<>();

        for (int i = 0; i < 5; ++i) {
            String card = scanner.next();
            hand.add(card);
        }

        String result = pokerHandRanking(hand);
        System.out.println(result);
    }
}




