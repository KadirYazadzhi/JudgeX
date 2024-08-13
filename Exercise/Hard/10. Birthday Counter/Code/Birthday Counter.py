def count_birthdays(students, month):
    count = 0
    for student in students:
        if student[3] == month:
            count += 1
    return count

def main():
    students = []

    while True:
        student_data = input().strip()
        if not student_data:
            break
        student_data = student_data.split(',')
        students.append(student_data)

    month_to_check = input().strip()

    result = count_birthdays(students, month_to_check)
    print(result)

if __name__ == "__main__":
    main()
