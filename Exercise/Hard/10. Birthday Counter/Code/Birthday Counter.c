#include <stdio.h>

#define MAX_STUDENTS 1000

struct Student {
    char name[50];
    char middleName[50];
    char lastName[50];
    int birthMonth;
    int birthYear;
};

int countBirthdays(struct Student students[], int numStudents, int month) {
    int count = 0;
    for (int i = 0; i < numStudents; ++i) {
        if (students[i].birthMonth == month) {
            count++;
        }
    }
    return count;
}

int main() {
    struct Student students[MAX_STUDENTS];
    int numStudents;
    scanf("%d", &numStudents);
    
    for (int i = 0; i < numStudents; ++i) {
        scanf("%s %s %s %d %d", students[i].name, students[i].middleName, students[i].lastName,
              &students[i].birthMonth, &students[i].birthYear);
    }
    
    int month;
    scanf("%d", &month);
    
    int result = countBirthdays(students, numStudents, month);
    printf("%d\n", result);
    
    return 0;
}
