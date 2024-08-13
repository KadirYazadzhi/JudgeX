import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static int findMissingNumber(List<Integer> arr) {
        int expectedSum = (arr.get(0) + arr.get(arr.size() - 1)) * (arr.size() + 1) / 2;
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String line = scanner.nextLine();
        
        String[] tokens = line.split(",");
        List<Integer> arr = new ArrayList<>();
        for (String token : tokens) {
            arr.add(Integer.parseInt(token.trim()));
        }

        System.out.println(findMissingNumber(arr));
    }
}


