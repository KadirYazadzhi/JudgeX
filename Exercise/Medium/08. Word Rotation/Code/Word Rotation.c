#include <stdio.h>
#include <string.h>

void rotateRight(char* str, int n) {
    char temp = str[n-1];
    for (int i = n-1; i > 0; i--) {
        str[i] = str[i-1];
    }
    str[0] = temp;
}

int main() {
    int n;
    char word[100];
    
    scanf("%d", &n);
    
    scanf("%s", word);

    for (int i = 0; i < n; i++) {
        if (i > 0) printf(", ");
        printf("%s", word);
        rotateRight(word, n);
    }
    printf("\n");
    
    return 0;
}
