#include <stdio.h>

void printLargeDigit(int digit) {
    switch (digit) {
        case 0:
            printf(" ##### \n");
            printf("#     #\n");
            printf("#     #\n");
            printf("#     #\n");
            printf("#     #\n");
            printf("#     #\n");
            printf(" ##### \n");
            break;
        case 1:
            printf("   #   \n");
            printf("  ##   \n");
            printf("   #   \n");
            printf("   #   \n");
            printf("   #   \n");
            printf("   #   \n");
            printf(" ##### \n");
            break;
        case 2:
            printf(" ##### \n");
            printf("#     #\n");
            printf("      #\n");
            printf(" ##### \n");
            printf("#      \n");
            printf("#      \n");
            printf("#######\n");
            break;
        case 3:
            printf(" ##### \n");
            printf("#     #\n");
            printf("      #\n");
            printf(" ##### \n");
            printf("      #\n");
            printf("#     #\n");
            printf(" ##### \n");
            break;
        case 4:
            printf("#      \n");
            printf("#    # \n");
            printf("#    # \n");
            printf("#######\n");
            printf("     # \n");
            printf("     # \n");
            printf("     # \n");
            break;
        case 5:
            printf("#######\n");
            printf("#      \n");
            printf("#      \n");
            printf(" ##### \n");
            printf("      #\n");
            printf("#     #\n");
            printf(" ##### \n");
            break;
        case 6:
            printf(" ##### \n");
            printf("#     #\n");
            printf("#      \n");
            printf("###### \n");
            printf("#     #\n");
            printf("#     #\n");
            printf(" ##### \n");
            break;
        case 7:
            printf("#######\n");
            printf("     # \n");
            printf("    #  \n");
            printf("   #   \n");
            printf("  #    \n");
            printf(" #     \n");
            printf("#      \n");
            break;
        case 8:
            printf(" ##### \n");
            printf("#     #\n");
            printf("#     #\n");
            printf(" ##### \n");
            printf("#     #\n");
            printf("#     #\n");
            printf(" ##### \n");
            break;
        case 9:
            printf(" ##### \n");
            printf("#     #\n");
            printf("#     #\n");
            printf("###### \n");
            printf("      #\n");
            printf("#     #\n");
            printf(" ##### \n");
            break;
    }
}

void printLargeNumber(int number) {
    if (number == 0) {
        printLargeDigit(0);
        return;
    }

    int digits[10];
    int count = 0;

    while (number > 0) {
        digits[count++] = number % 10;
        number /= 10;
    }

    for (int i = count - 1; i >= 0; --i) {
        printLargeDigit(digits[i]);
    }
}

int main() {
    int number;

    scanf("%d", &number);

    printLargeNumber(number);

    return 0;
}
