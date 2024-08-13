import java.util.HashMap;
import java.util.Scanner;

public class RomanNumeralConverter {

    public static int romanToInt(String s) {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = romanValues.get(s.charAt(i));

            if (currentValue >= prevValue) {
                result += currentValue;
            } else {
                result -= currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static boolean isValidRoman(String s) {
        for (char c : s.toCharArray()) {
            if (c != 'I' && c != 'V' && c != 'X' && c != 'L' &&
                c != 'C' && c != 'D' && c != 'M') {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String roman = scanner.nextLine();

        if (!isValidRoman(roman)) {
            System.out.println("Error: Invalid Roman numeral");
        } else {
            int arabic = romanToInt(roman);
            System.out.println(arabic);
        }
    }
}



