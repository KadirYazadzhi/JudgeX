import java.util.Scanner;

public class PrintLargeNumber {
    public static void printLargeDigit(int digit) {
        switch (digit) {
            case 0:
                System.out.println(" ##### ");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println(" ##### ");
                break;
            case 1:
                System.out.println("   #   ");
                System.out.println("  ##   ");
                System.out.println("   #   ");
                System.out.println("   #   ");
                System.out.println("   #   ");
                System.out.println("   #   ");
                System.out.println(" ##### ");
                break;
            case 2:
                System.out.println(" ##### ");
                System.out.println("#     #");
                System.out.println("      #");
                System.out.println(" ##### ");
                System.out.println("#      ");
                System.out.println("#      ");
                System.out.println("#######");
                break;
            case 3:
                System.out.println(" ##### ");
                System.out.println("#     #");
                System.out.println("      #");
                System.out.println(" ##### ");
                System.out.println("      #");
                System.out.println("#     #");
                System.out.println(" ##### ");
                break;
            case 4:
                System.out.println("#      ");
                System.out.println("#    # ");
                System.out.println("#    # ");
                System.out.println("#######");
                System.out.println("     # ");
                System.out.println("     # ");
                System.out.println("     # ");
                break;
            case 5:
                System.out.println("#######");
                System.out.println("#      ");
                System.out.println("#      ");
                System.out.println(" ##### ");
                System.out.println("      #");
                System.out.println("#     #");
                System.out.println(" ##### ");
                break;
            case 6:
                System.out.println(" ##### ");
                System.out.println("#     #");
                System.out.println("#      ");
                System.out.println("###### ");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println(" ##### ");
                break;
            case 7:
                System.out.println("#######");
                System.out.println("     # ");
                System.out.println("    #  ");
                System.out.println("   #   ");
                System.out.println("  #    ");
                System.out.println(" #     ");
                System.out.println("#      ");
                break;
            case 8:
                System.out.println(" ##### ");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println(" ##### ");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println(" ##### ");
                break;
            case 9:
                System.out.println(" ##### ");
                System.out.println("#     #");
                System.out.println("#     #");
                System.out.println("###### ");
                System.out.println("      #");
                System.out.println("#     #");
                System.out.println(" ##### ");
                break;
        }
    }

    public static void printLargeNumber(int number) {
        if (number == 0) {
            printLargeDigit(0);
            return;
        }

        int[] digits = new int[10];
        int count = 0;

        while (number > 0) {
            digits[count++] = number % 10;
            number /= 10;
        }

        for (int i = count - 1; i >= 0; --i) {
            printLargeDigit(digits[i]);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = scanner.nextInt();

        printLargeNumber(number);

        scanner.close();
    }
}




