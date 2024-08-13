#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* isVampireNumber(int n) {
    char str[10];
    sprintf(str, "%d", n);
    int len = strlen(str);
    
    if (n < 100) {
        return "Normal Number";
    }
    
    char digits[10];
    strcpy(digits, str);
    qsort(digits, len, sizeof(char), strcmp);
    
    if (len % 2 == 0) {
        do {
            char part1[10], part2[10];
            strncpy(part1, digits, len / 2);
            part1[len / 2] = '\0';
            strncpy(part2, digits + len / 2, len / 2);
            part2[len / 2] = '\0';
            
            int num1 = atoi(part1);
            int num2 = atoi(part2);
            
            if (num1 * num2 == n && part1[0] != '0' && part2[0] != '0') {
                return "True Vampire";
            }
            
        } while (next_permutation(digits, digits + len));
    }
    else {
        do {
            for (int i = 1; i < len; ++i) {
                char part1[10], part2[10];
                strncpy(part1, digits, i);
                part1[i] = '\0';
                strncpy(part2, digits + i, len - i);
                part2[len - i] = '\0';
                
                int num1 = atoi(part1);
                int num2 = atoi(part2);
                
                if (num1 * num2 == n && part1[0] != '0' && part2[0] != '0') {
                    return "Pseudovampire";
                }
            }
        } while (next_permutation(digits, digits + len));
    }
    
    return "Normal Number";
}

int main() {
    int n;
    scanf("%d", &n);
    
    printf("%s\n", isVampireNumber(n));
    
    return 0;
}

