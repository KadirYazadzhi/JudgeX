#include <stdio.h>
#include <string.h>

int countWords(char *line) {
    int count = 0;
    char word[100]; 

    while (sscanf(line, "%s", word) == 1) {
        count++;
        line += strlen(word) + 1; 
    }

    return count;
}

int main() {
    char line[1000]; 
    fgets(line, sizeof(line), stdin); 

    printf("%d\n", countWords(line));

    return 0;
}
