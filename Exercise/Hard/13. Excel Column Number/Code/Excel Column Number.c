#include <stdio.h>
#include <string.h>

int titleToNumber(char *s) {
    int result = 0;
    while (*s) {
        result = result * 26 + (*s - 'A' + 1);
        s++;
    }
    return result;
}

int main() {
    char s[100];
    scanf("%s", s);
    
    int number = titleToNumber(s);
    printf("%d\n", number);
    
    return 0;
}

