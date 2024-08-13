import java.util.Scanner;

public class Main {

    static String space(String s) {
        int d1 = s.indexOf("[");
        int d2 = d1;
        for (int i = d1 + 1; i < s.length(); i++) {
            if (s.charAt(i) == '[') d1 = i;
            if (s.charAt(i) == ']') {
                d2 = i;
                break;
            }
        }
        StringBuilder rep = new StringBuilder();
        int d = Integer.parseInt(s.substring(d1 + 1, d1 + 2));
        for (int i = 0; i < d; i++) rep.append(s.substring(d1 + 2, d2));
        return s.substring(0, d1) + rep.toString() + s.substring(d2 + 1);
    }

    static String spaceMessage(String s) {
        while (s.contains("[")) s = space(s);
        return s;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        System.out.println(spaceMessage(s));
    }
}




