function countBirthdays(students, month) {
    let count = 0;
    students.forEach(student => {
        if (student.birthMonth === month) {
            count++;
        }
    });
    return count;
}

const students = [
    { name: "Ivan", middleName: "Ivanov", lastName: "Ivanov", birthMonth: 4, birthYear: 1997 },
    { name: "Maria", middleName: "Petrova", lastName: "Petrova", birthMonth: 6, birthYear: 1982 },
    { name: "Georgi", middleName: "Georgiev", lastName: "Georgiev", birthMonth: 3, birthYear: 1990 },
    { name: "Elena", middleName: "Ivanova", lastName: "Ivanova", birthMonth: 8, birthYear: 2001 },
    { name: "Dimitar", middleName: "Dimitrov", lastName: "Dimitrov", birthMonth: 12, birthYear: 1988 },
    { name: "Anna", middleName: "Angelova", lastName: "Angelova", birthMonth: 5, birthYear: 1985 },
    { name: "Nikolay", middleName: "Nikolov", lastName: "Nikolov", birthMonth: 1, birthYear: 1995 },
    { name: "Alexandra", middleName: "Alexandrova", lastName: "Alexandrova", birthMonth: 3, birthYear: 1987 },
    { name: "Petar", middleName: "Petrov", lastName: "Petrov", birthMonth: 4, birthYear: 1993 },
    { name: "Ekaterina", middleName: "Ivanova", lastName: "Ivanova", birthMonth: 11, birthYear: 2000 }
];

const monthToCheck = 4; 
const result = countBirthdays(students, monthToCheck);
console.log(result);
