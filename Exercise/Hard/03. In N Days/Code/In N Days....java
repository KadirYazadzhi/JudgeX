import java.util.Scanner;

public class DayCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String startDay = scanner.nextLine().trim();

        int N = scanner.nextInt();

        String result = calculateDay(startDay, N);
        System.out.println(result);
    }

    public static String calculateDay(String startDay, int N) {
        String[] days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
        int startIdx = -1;

        for (int i = 0; i < days.length; i++) {
            if (startDay.equals(days[i])) {
                startIdx = i;
                break;
            }
        }

        int endIdx = (startIdx + N) % 7;
        return days[endIdx];
    }
}




