#include <stdio.h>

void digitSplitter(int number) {
    int digits[5];
    
    for (int i = 4; i >= 0; i--) {
        digits[i] = number % 10;
        number /= 10;
    }

    for (int i = 0; i < 5; i++) {
        printf("%d\n", digits[i]);
    }
}

int main() {
    int number;
    scanf("%d", &number);
    digitSplitter(number);
    return 0;
}

