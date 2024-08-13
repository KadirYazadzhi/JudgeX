using System;

class Program {
    static void PrintLargeDigit(int digit) {
        switch (digit) {
            case 0:
                Console.WriteLine(" ##### ");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine(" ##### ");
                break;
            case 1:
                Console.WriteLine("   #   ");
                Console.WriteLine("  ##   ");
                Console.WriteLine("   #   ");
                Console.WriteLine("   #   ");
                Console.WriteLine("   #   ");
                Console.WriteLine("   #   ");
                Console.WriteLine(" ##### ");
                break;
            case 2:
                Console.WriteLine(" ##### ");
                Console.WriteLine("#     #");
                Console.WriteLine("      #");
                Console.WriteLine(" ##### ");
                Console.WriteLine("#      ");
                Console.WriteLine("#      ");
                Console.WriteLine("#######");
                break;
            case 3:
                Console.WriteLine(" ##### ");
                Console.WriteLine("#     #");
                Console.WriteLine("      #");
                Console.WriteLine(" ##### ");
                Console.WriteLine("      #");
                Console.WriteLine("#     #");
                Console.WriteLine(" ##### ");
                break;
            case 4:
                Console.WriteLine("#      ");
                Console.WriteLine("#    # ");
                Console.WriteLine("#    # ");
                Console.WriteLine("#######");
                Console.WriteLine("     # ");
                Console.WriteLine("     # ");
                Console.WriteLine("     # ");
                break;
            case 5:
                Console.WriteLine("#######");
                Console.WriteLine("#      ");
                Console.WriteLine("#      ");
                Console.WriteLine(" ##### ");
                Console.WriteLine("      #");
                Console.WriteLine("#     #");
                Console.WriteLine(" ##### ");
                break;
            case 6:
                Console.WriteLine(" ##### ");
                Console.WriteLine("#     #");
                Console.WriteLine("#      ");
                Console.WriteLine("###### ");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine(" ##### ");
                break;
            case 7:
                Console.WriteLine("#######");
                Console.WriteLine("     # ");
                Console.WriteLine("    #  ");
                Console.WriteLine("   #   ");
                Console.WriteLine("  #    ");
                Console.WriteLine(" #     ");
                Console.WriteLine("#      ");
                break;
            case 8:
                Console.WriteLine(" ##### ");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine(" ##### ");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine(" ##### ");
                break;
            case 9:
                Console.WriteLine(" ##### ");
                Console.WriteLine("#     #");
                Console.WriteLine("#     #");
                Console.WriteLine("###### ");
                Console.WriteLine("      #");
                Console.WriteLine("#     #");
                Console.WriteLine(" ##### ");
                break;
        }
    }

    static void PrintLargeNumber(int number) {
        if (number == 0) {
            PrintLargeDigit(0);
            return;
        }

        int[] digits = new int[10];
        int count = 0;

        while (number > 0) {
            digits[count++] = number % 10;
            number /= 10;
        }

        for (int i = count - 1; i >= 0; --i) {
            PrintLargeDigit(digits[i]);
        }
    }

    static void Main() {
        int number = int.Parse(Console.ReadLine());

        PrintLargeNumber(number);
    }
}


