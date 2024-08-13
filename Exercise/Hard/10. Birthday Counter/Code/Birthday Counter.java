import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Student {
    String name;
    String middleName;
    String lastName;
    int birthMonth;
    int birthYear;
}

public class Main {
    public static int countBirthdays(List<Student> students, int month) {
        int count = 0;
        for (Student student : students) {
            if (student.birthMonth == month) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Student> students = new ArrayList<>();
        
        int numStudents = scanner.nextInt();
        scanner.nextLine(); 
        
        for (int i = 0; i < numStudents; i++) {
            String[] input = scanner.nextLine().split(" ");
            Student student = new Student();
            student.name = input[0];
            student.middleName = input[1];
            student.lastName = input[2];
            student.birthMonth = Integer.parseInt(input[3]);
            student.birthYear = Integer.parseInt(input[4]);
            students.add(student);
        }
        
        int month = scanner.nextInt();
        
        int result = countBirthdays(students, month);
        System.out.println(result);
        
        scanner.close();
    }
}




