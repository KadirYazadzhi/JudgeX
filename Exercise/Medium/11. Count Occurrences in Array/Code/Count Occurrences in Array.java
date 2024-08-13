import java.util.Scanner;

public class Main {
    static void readVector(int[] numbers) {
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = scanner.nextInt();
        }
    }

    static void findNumber(int[] numbers, int num) {
        int counter = 0;
        for (int number : numbers) {
            if (number == num) {
                counter++;
            }
        }
        System.out.println(counter);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] numbers = new int[n];

        readVector(numbers);

        int num = scanner.nextInt();

        findNumber(numbers, num);
    }
}



