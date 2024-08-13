#include <stdio.h>
#include <string.h>

void sumList() {
    char line[100]; 
    fgets(line, sizeof(line), stdin);
    
    int num;
    int sum = 0;
    char *token = strtok(line, " ");
    while (token != NULL) {
        sscanf(token, "%d", &num);
        sum += num;
        token = strtok(NULL, " ");
    }

    printf("%d\n", sum);
}

int main() {
    sumList();

    return 0;
}
