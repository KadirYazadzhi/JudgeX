using System;
using System.Collections.Generic;

class Program {
    struct Student {
        public string name;
        public string middleName;
        public string lastName;
        public int birthMonth;
        public int birthYear;
    }

    static int CountBirthdays(List<Student> students, int month) {
        int count = 0;
        foreach (var student in students) {
            if (student.birthMonth == month) {
                count++;
            }
        }
        return count;
    }

    static void Main() {
        List<Student> students = new List<Student>();
        int numStudents = int.Parse(Console.ReadLine());
        
        for (int i = 0; i < numStudents; i++) {
            string[] input = Console.ReadLine().Split();
            Student student = new Student();
            student.name = input[0];
            student.middleName = input[1];
            student.lastName = input[2];
            student.birthMonth = int.Parse(input[3]);
            student.birthYear = int.Parse(input[4]);
            students.Add(student);
        }
        
        int month = int.Parse(Console.ReadLine());
        
        int result = CountBirthdays(students, month);
        Console.WriteLine(result);
    }
}


