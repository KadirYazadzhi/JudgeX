#include <iostream>
#include <vector>
#include <string>

using namespace std;

struct Student {
    string name;
    string middleName;
    string lastName;
    int birthMonth;
    int birthYear;
};

int countBirthdays(vector<Student>& students, int month) {
    int count = 0;
    for (const auto& student : students) {
        if (student.birthMonth == month) {
            count++;
        }
    }
    return count;
}

int main() {
    vector<Student> students;
    int numStudents;
    cin >> numStudents;
    
    for (int i = 0; i < numStudents; ++i) {
        Student student;
        cin >> student.name >> student.middleName >> student.lastName >> student.birthMonth >> student.birthYear;
        students.push_back(student);
    }
    
    int month;
    cin >> month;
    
    int result = countBirthdays(students, month);
    cout << result << endl;
    
    return 0;
}
