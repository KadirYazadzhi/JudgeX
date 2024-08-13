import java.util.Scanner;

public class Main {
    static void sumList() {
        Scanner scanner = new Scanner(System.in);
        String line = scanner.nextLine();
        
        int sum = 0;
        String[] numbers = line.split(" ");
        for (String numStr : numbers) {
            sum += Integer.parseInt(numStr);
        }
        
        System.out.println(sum);
        scanner.close();
    }

    public static void main(String[] args) {
        sumList();
    }
}



