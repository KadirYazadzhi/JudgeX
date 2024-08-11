#include <stdio.h>

void calcPer(int length, int width) {
    int result = 2 * (length + width);
    printf("%d\n", result);
}


int main() {
    int length;
    int width;
    scanf("%d", &length);
    scanf("%d", &width);

    calcPer(length, width);
}