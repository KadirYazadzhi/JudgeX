document.addEventListener('DOMContentLoaded', function() {

    documentButton.addEventListener('click', function() {
        const activeTask = document.querySelector('.task-card.active-task');

        if (activeTask) {
            const taskText = activeTask.textContent.trim();

            let data = ReturnTaskDocument(taskText);

            const filePath = `${data.directory}/${data.fileName}`;
            window.open(filePath, '_blank');
        } else {
            alert('Please select a task first.');
        }
    });


});

function ReturnTaskDocument(taskText) {
    let fileName = '';
    let directory = '';

    switch (getSelectedLevel()) {
        case "1":
            directory = 'Exercise/EN/Easy';
            switch (taskText) {
                case '01. Even Number Check':
                    fileName = '01. Even Number Check/Even Number Check.pdf';
                    break;
                case '02. Leap Year Check':
                    fileName = '02. Leap Year Check/Leap Year Check.pdf';
                    break;
                case '03. Prime Number Check':
                    fileName = '03. Prime Number Check/Prime Number Check.pdf';
                    break;
                case '04. Vowel Count':
                    fileName = '04. Vowel Count/Vowel Count.pdf';
                    break;
                case '05. FizzBuzz':
                    fileName = '05. FizzBuzz/FizzBuzz.pdf';
                    break;
                case '06. Positive or Negative':
                    fileName = '06. Positive or Negative/Positive or Negative.pdf';
                    break;
                case '07. Convert Celsius to Fahrenheit':
                    fileName = '07. Convert Celsius to Fahrenheit/Convert Celsius to Fahrenheit.pdf';
                    break;
                case '08. Simple Interest':
                    fileName = '08. Simple Interest/Simple Interest.pdf';
                    break;
                case '09. Sum of Two Numbers':
                    fileName = '09. Sum of Two Numbers/Sum of Two Numbers.pdf';
                    break;
                case '10. Maximum of Two Numbers':
                    fileName = '10. Maximum of Two Numbers/Maximum of Two Numbers.pdf';
                    break;
                case '11. Check Divisibility':
                    fileName = '11. Check Divisibility/Check Divisibility.pdf';
                    break;
                case '12. Calculate Perimeter of Rectangle':
                    fileName = '12. Calculate Perimeter of Rectangle/Calculate Perimeter of Rectangle.pdf';
                    break;
                case '13. Square of a Number':
                    fileName = '13. Square of a Number/Square of a Number.pdf';
                    break;
                case '14. Simple Calculator':
                    fileName = '14. Simple Calculator/Simple Calculator.pdf';
                    break;
                case '15. Digit Splitter':
                    fileName = '15. Digit Splitter/Digit Splitter.pdf';
                    break;
                default:
                    alert('No file available for this task.');
                    return;
            }
            break;

        case "2":
            directory = 'Exercise/EN/Medium';
            switch (taskText) {
                case '01. Palindrome Check':
                    fileName = '01. Palindrome Check/Palindrome Check.pdf';
                    break;
                case '02. Sum of List':
                    fileName = '02. Sum of List/Sum of List.pdf';
                    break;
                case '03. Factorial Calculation':
                    fileName = '03. Factorial Calculation/Factorial Calculation.pdf';
                    break;
                case '04. Count Words in a Sentence':
                    fileName = '04. Count Words in a Sentence/Count Words in a Sentence.pdf';
                    break;
                case '05. Find Maximum in List':
                    fileName = '05. Find Maximum in List/Find Maximum in List.pdf';
                    break;
                case '06. Find the Missing Number in a Sequence':
                    fileName = '06. Find the Missing Number in a Sequence/Find the Missing Number in a Sequence.pdf';
                    break;
                case '07. Sort and Filter Array':
                    fileName = '07. Sort and Filter Array/Sort and Filter Array.pdf';
                    break;
                case '08. Word Rotation':
                    fileName = '08. Word Rotation/Word Rotation.pdf';
                    break;
                case '09. Pangram Checker':
                    fileName = '09. Pangram Checker/Pangram Checker.pdf';
                    break;
                case '10. Column-wise Matrix Fill':
                    fileName = '10. Column-wise Matrix Fill/Column-wise Matrix Fill.pdf';
                    break;
                case '11. Count Occurrences in Array':
                    fileName = '11. Count Occurrences in Array/Count Occurrences in Array.pdf';
                    break;
                case '12. Tokenize String into Substrings':
                    fileName = '12. Tokenize String into Substrings/Tokenize String into Substrings.pdf';
                    break;
                case '13. Print Number in Large Format':
                    fileName = '13. Print Number in Large Format/Print Number in Large Format.pdf';
                    break;
                case '14. Sort Strings Lexicographically':
                    fileName = '14. Sort Strings Lexicographically/Sort Strings Lexicographically.pdf';
                    break;
                case '15. Build Toy Cars':
                    fileName = '15. Build Toy Cars/Build Toy Cars.pdf';
                    break;
                default:
                    alert('No file available for this task.');
                    return;
            }
            break;

        case "3":
            directory = 'Exercise/EN/Hard';
            switch (taskText) {
                case '01. Tic Tac Toe':
                    fileName = '01. Tic Tac Toe/Tic Tac Toe.pdf';
                    break;
                case '02. Caesar Cipher Encryption':
                    fileName = '02. Caesar Cipher Encryption/Caesar Cipher Encryption.pdf';
                    break;
                case '03. In N Days':
                    fileName = '03. In N Days/In N Days.pdf';
                    break;
                case '04. Bracket Validator':
                    fileName = '04. Bracket Validator/Bracket Validator.pdf';
                    break;
                case '05. Password Strength Validator':
                    fileName = '05. Password Strength Validator/Password Strength Validator.pdf';
                    break;
                case '06. Arithmetic Expression Evaluator':
                    fileName = '06. Arithmetic Expression Evaluator/Arithmetic Expression Evaluator.pdf';
                    break;
                case '07. Nested Square Root Evaluator':
                    fileName = '07. Nested Square Root Evaluator/Nested Square Root Evaluator.pdf';
                    break;
                case '08. Roman Numeral Validator and Converter':
                    fileName = '08. Roman Numeral Validator and Converter/Roman Numeral Validator and Converter.pdf';
                    break;
                case '09. Inconsistent Stones in Boxes':
                    fileName = '09. Inconsistent Stones in Boxes/Inconsistent Stones in Boxes.pdf';
                    break;
                case '10. Birthday Counter':
                    fileName = '10. Birthday Counter/Birthday Counter.pdf';
                    break;
                case '11. Neighbor Zone Maximizer':
                    fileName = '11. Neighbor Zone Maximizer/Neighbor Zone Maximizer.pdf';
                    break;
                case '12. Centrifuge Balance Checker':
                    fileName = '12. Centrifuge Balance Checker/Centrifuge Balance Checker.pdf';
                    break;
                case '13. Excel Column Number':
                    fileName = '13. Excel Column Number/Excel Column Number.pdf';
                    break;
                case '14. Funny Numbers':
                    fileName = '14. Funny Numbers/Funny Numbers.pdf';
                    break;
                case '15. Chess Pieces':
                    fileName = '15. Chess Pieces/Chess Pieces.pdf';
                    break;
                default:
                    alert('No file available for this task.');
                    return;
            }
            break;

        case "4":
            directory = 'Exercise/EN/Insane';
            switch (taskText) {
                case '01. Cycle Detection':
                    fileName = '01. Cycle Detection/Cycle Detection.pdf';
                    break;
                case '02. Shortest Path Finder':
                    fileName = '02. Shortest Path Finder/Shortest Path Finder.pdf';
                    break;
                case '03. Max Sum Longest Path in DAG':
                    fileName = '03. Max Sum Longest Path in DAG/Max Sum Longest Path in DAG.pdf';
                    break;
                case '04. Constrained Shortest Path':
                    fileName = '04. Constrained Shortest Path/Constrained Shortest Path.pdf';
                    break;
                case '05. Largest Island':
                    fileName = '05. Largest Island/Largest Island.pdf';
                    break;
                case '06. Message from Space':
                    fileName = '06. Message from Space/Message from Space.pdf';
                    break;
                case '07. Vampire Number':
                    fileName = '07. Vampire Number/Vampire Number.pdf';
                    break;
                case '08. Poker Hand Ranking':
                    fileName = '08. Poker Hand Ranking/Poker Hand Ranking.pdf';
                    break;
                case '09. Hexagonal Grid - Distance':
                    fileName = '09. Hexagonal Grid - Distance/Hexagonal Grid - Distance.pdf';
                    break;
                case '10. Casino Security':
                    fileName = '10. Casino Security/Casino Security.pdf';
                    break;
                default:
                    alert('No file available for this task.');
                    return;
            }
            break;

        case "5":
            directory = 'Exercise/EN/Special';
            switch (taskText) {
                case '01. The Prince\'s Treasure Hunt':
                    fileName = '01. The Prince\'s Treasure Hunt/The Prince\'s Treasure Hunt.pdf';
                    break;
                case '02. The Delivery Path':
                    fileName = '02. The Delivery Path/The Delivery Path.pdf';
                    break;
                case '03. The Lost Expedition':
                    fileName = '03. The Lost Expedition/The Lost Expedition.pdf';
                    break;
                case '04. The Secret Network':
                    fileName = '04. The Secret Network/The Secret Network.pdf';
                    break;
                case '05. Operation Data Breach':
                    fileName = '05. Operation Data Breach/Operation Data Breach.pdf';
                    break;
                default:
                    alert('No file available for this task.');
                    return;
            }
            break;

        default:
            alert('Invalid difficulty level selected.');
            return;
    }

    return {directory, fileName};
}
