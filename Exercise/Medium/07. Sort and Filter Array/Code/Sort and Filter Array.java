import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void sortAndFilter(List<Integer> arr) {
        int count5 = 0, count6 = 0, count7 = 0;
        for (int num : arr) {
            if (num == 5) count5++;
            else if (num == 6) count6++;
            else if (num == 7) count7++;
        }

        for (int i = 0; i < count5; i++) System.out.print("5 ");
        for (int i = 0; i < count6; i++) System.out.print("6 ");
        for (int i = 0; i < count7; i++) System.out.print("7 ");
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String line = scanner.nextLine();
        
        String[] tokens = line.split(" ");
        List<Integer> arr = new ArrayList<>();
        for (String token : tokens) {
            int num = Integer.parseInt(token.trim());
            if (num >= 5 && num <= 7) {
                arr.add(num);
            }
        }

        sortAndFilter(arr);
    }
}


