#include <stdio.h>
#include <string.h>

char* calculateDay(char* startDay, int N) {
    char* days[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    int startIdx = -1;

    for (int i = 0; i < 7; i++) {
        if (strcmp(startDay, days[i]) == 0) {
            startIdx = i;
            break;
        }
    }

    int endIdx = (startIdx + N) % 7;
    return days[endIdx];
}

int main() {
    char startDay[20];
    int N;

    fgets(startDay, sizeof(startDay), stdin);
    startDay[strcspn(startDay, "\n")] = '\0';

    scanf("%d", &N);

    char* result = calculateDay(startDay, N);
    printf("%s\n",result);

    return 0;
}