import java.util.Scanner;

public class CasinoSecurity {

    static String casinoSecurity(String s) {
        int thiefPos = s.indexOf('T');
        int moneyPos = s.indexOf('$');
        int guardPos = s.indexOf('G');

        if (thiefPos == -1 || moneyPos == -1) {
            return "Safe";
        }

        if ((thiefPos < moneyPos && moneyPos < guardPos) ||
            (guardPos < moneyPos && moneyPos < thiefPos)) {
            return "Safe";
        }

        return "ALARM!";
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        String result = casinoSecurity(input);
        System.out.println(result);
    }
}




