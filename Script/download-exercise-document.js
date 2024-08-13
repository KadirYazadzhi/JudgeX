document.addEventListener('DOMContentLoaded', function() {
    const taskCards = document.querySelectorAll('.task-card');
    const documentButton = document.querySelector('.document-button');

    taskCards.forEach(function(card) {
        card.addEventListener('click', function() {
            taskCards.forEach(function(c) {
                c.classList.remove('active-task');
            });
            card.classList.add('active-task');
        });
    });

    documentButton.addEventListener('click', function() {
        const activeTask = document.querySelector('.task-card.active-task');
        const selectedButton = localStorage.getItem('selectedButton');

        if (activeTask) {
            let fileName = '';
            const taskText = activeTask.textContent.trim();

            const link = document.createElement('a');
            if (selectedButton === "1") {
                link.href = `Exercise/Easy/${fileName}`;

                switch (taskText) {
                    case '01. Even Number Check':
                        fileName = '01. Even Number Check/Even Number Check.docx';
                        break;
                    case '02. Leap Year Check':
                        fileName = '02. Leap Year Check/Leap Year Check.docx';
                        break;
                    case '03. Prime Number Check':
                        fileName = '03. Prime Number Check/Prime Number Check.docx';
                        break;
                    case '04. Vowel Count':
                        fileName = '04. Vowel Count/Vowel Count.docx';
                        break;
                    case '05. FizzBuzz':
                        fileName = '05. FizzBuzz/FizzBuzz.docx';
                        break;
                    case '06. Positive or Negative':
                        fileName = '06. Positive or Negative/Positive or Negative.docx';
                        break;
                    case '07. Convert Celsius to Fahrenheit':
                        fileName = '07. Convert Celsius to Fahrenheit/Convert Celsius to Fahrenheit.docx';
                        break;
                    case '08. Simple Interest':
                        fileName = '08. Simple Interest/Simple Interest.docx';
                        break;
                    case '09. Sum of Two Numbers':
                        fileName = '09. Sum of Two Numbers/Sum of Two Numbers.docx';
                        break;
                    case '10. Maximum of Two Numbers':
                        fileName = '10. Maximum of Two Numbers/Maximum of Two Numbers.docx';
                        break;
                    case '11. Check Divisibility':
                        fileName = '11. Check Divisibility/Check Divisibility.docx';
                        break;
                    case '12. Calculate Perimeter of Rectangle':
                        fileName = '12. Calculate Perimeter of Rectangle/Calculate Perimeter of Rectangle.docx';
                        break;
                    case '13. Square of a Number':
                        fileName = '13. Square of a Number/Square of a Number.docx';
                        break;
                    case '14. Simple Calculator':
                        fileName = '14. Simple Calculator/Simple Calculator.docx';
                        break;
                    case '15. Digit Splitter':
                        fileName = '15. Digit Splitter/Digit Splitter.docx';
                        break;
                    default:
                        alert('No file available for this task.');
                        return;
                }
            }
            else if (selectedButton === "2") {
                link.href = `Exercise/Medium/${fileName}`;

                switch (taskText) {
                    case '01. Palindrome Check':
                        fileName = '01. Palindrome Check/Palindrome Check.docx';
                        break;
                    case '02. Sum of List':
                        fileName = '02. Sum of List/Sum of List.docx';
                        break;
                    case '03. Factorial Calculation':
                        fileName = '03. Factorial Calculation/Factorial Calculation.docx';
                        break;
                    case '04. Count Words in a Sentence':
                        fileName = '04. Count Words in a Sentence/Count Words in a Sentence.docx';
                        break;
                    case '05. Find Maximum in List':
                        fileName = '05. Find Maximum in List/Find Maximum in List.docx';
                        break;
                    case '06. Find the Missing Number in a Sequence':
                        fileName = '06. Find the Missing Number in a Sequence/Find the Missing Number in a Sequence.docx';
                        break;
                    case '07. Sort and Filter Array':
                        fileName = '07. Sort and Filter Array/Sort and Filter Array.docx';
                        break;
                    case '08. Word Rotation':
                        fileName = '08. Word Rotation/Word Rotation.docx';
                        break;
                    case '09. Pangram Checker':
                        fileName = '09. Pangram Checker/Pangram Checker.docx';
                        break;
                    case '10. Column-wise Matrix Fill':
                        fileName = '10. Column-wise Matrix Fill/Column-wise Matrix Fill.docx';
                        break;
                    case '11. Count Occurrences in Array':
                        fileName = '11. Count Occurrences in Array/Count Occurrences in Array.docx';
                        break;
                    case '12. Tokenize String into Substrings':
                        fileName = '12. Tokenize String into Substrings/Tokenize String into Substrings.docx';
                        break;
                    case '13. Print Number in Large Format':
                        fileName = '13. Print Number in Large Format/Print Number in Large Format.docx';
                        break;
                    case '14. Sort Strings Lexicographically':
                        fileName = '14. Sort Strings Lexicographically/Sort Strings Lexicographically.docx';
                        break;
                    case '15. Build Toy Cars':
                        fileName = '15. Build Toy Cars/Build Toy Cars.docx';
                        break;
                    default:
                        alert('No file available for this task.');
                        return;
                }
            }
            else if (selectedButton === "3") {
                link.href = `Exercise/Hard/${fileName}`;

                switch (taskText) {
                    case '01. Tic Tac Toe':
                        fileName = '01. Tic Tac Toe/Tic Tac Toe.docx';
                        break;
                    case '02. Caesar Cipher Encryption':
                        fileName = '02. Caesar Cipher Encryption/Caesar Cipher Encryption.docx';
                        break;
                    case '03. In N Days':
                        fileName = '03. In N Days/In N Days....docx';
                        break;
                    case '04. Count Words in a Sentence':
                        fileName = '04. Count Words in a Sentence/Count Words in a Sentence.docx';
                        break;
                    case '05. Find Maximum in List':
                        fileName = '05. Find Maximum in List/Find Maximum in List.docx';
                        break;
                    case '06. Find the Missing Number in a Sequence':
                        fileName = '06. Find the Missing Number in a Sequence/Find the Missing Number in a Sequence.docx';
                        break;
                    case '07. Sort and Filter Array':
                        fileName = '07. Sort and Filter Array/Sort and Filter Array.docx';
                        break;
                    case '08. Word Rotation':
                        fileName = '08. Word Rotation/Word Rotation.docx';
                        break;
                    case '09. Pangram Checker':
                        fileName = '09. Pangram Checker/Pangram Checker.docx';
                        break;
                    case '10. Column-wise Matrix Fill':
                        fileName = '10. Column-wise Matrix Fill/Column-wise Matrix Fill.docx';
                        break;
                    case '11. Count Occurrences in Array':
                        fileName = '11. Count Occurrences in Array/Count Occurrences in Array.docx';
                        break;
                    case '12. Tokenize String into Substrings':
                        fileName = '12. Tokenize String into Substrings/Tokenize String into Substrings.docx';
                        break;
                    case '13. Print Number in Large Format':
                        fileName = '13. Print Number in Large Format/Print Number in Large Format.docx';
                        break;
                    case '14. Sort Strings Lexicographically':
                        fileName = '14. Sort Strings Lexicographically/Sort Strings Lexicographically.docx';
                        break;
                    case '15. Build Toy Cars':
                        fileName = '15. Build Toy Cars/Build Toy Cars.docx';
                        break;
                    default:
                        alert('No file available for this task.');
                        return;
                }
            }

            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('Please select a task first.');
        }
    });
});