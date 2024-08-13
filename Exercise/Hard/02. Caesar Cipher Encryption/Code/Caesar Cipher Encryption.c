#include <stdio.h>
#include <string.h>

void caesarCipher(char *str, int shift) {
    int i = 0;
    while (str[i] != '\0') {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            str[i] = 'A' + (str[i] - 'A' + shift) % 26;
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = 'a' + (str[i] - 'a' + shift) % 26;
        }
        i++;
    }
}

int main() {
    char str[1000];
    int shift;
    
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = '\0';
    
    scanf("%d", &shift);
    
    caesarCipher(str, shift);
    printf("%s\n", str);
    
    return 0;
}
