#include <stdio.h>
#include <math.h>

int funny_number(int n, int p) {
    int sum = 0;
    char str[20];
    sprintf(str, "%d", n);
    
    for (int i = 0; str[i] != '\0'; i++) {
        sum += pow(str[i] - '0', p + i);
    }

    if (sum % n == 0) {
        return sum / n;
    } else {
        return -1;
    }
}

int main() {
    int n, p;
    scanf("%d", &n);
    scanf("%d", &p);
    
    printf("%d\n", funny_number(n, p));
    return 0;
}

