document.addEventListener('DOMContentLoaded', function() {

    const tasksForButton = {
        1: [
            "01. Even Number Check",
            "02. Leap Year Check",
            "03. Prime Number Check",
            "04. Vowel Count",
            "05. FizzBuzz",
            "06. Positive or Negative",
            "07. Convert Celsius to Fahrenheit",
            "08. Simple Interest",
            "09. Sum of Two Numbers",
            "10. Maximum of Two Numbers",
            "11. Check Divisibility",
            "12. Calculate Perimeter of Rectangle",
            "13. Square of a Number",
            "14. Simple Calculator",
            "15. Digit Splitter"
        ],
        2: [
            "01. Palindrome Check",
            "02. Sum of List",
            "03. Factorial Calculation",
            "04. Count Words in a Sentence",
            "05. Find Maximum in List",
            "06. Find the Missing Number in a Sequence",
            "07. Sort and Filter Array",
            "08. Word Rotation",
            "09. Pangram Checker",
            "10. Column-wise Matrix Fill",
            "11. Count Occurrences in Array",
            "12. Tokenize String into Substrings",
            "13. Print Number in Large Format",
            "14. Sort Strings Lexicographically",
            "15. Build Toy Cars"
        ],
        3: [
            "01. Tic Tac Toe",
            "02. Caesar Cipher Encryption",
            "03. In N Days",
            "04. Bracket Validator",
            "05. Password Strength Validator",
            "06. Arithmetic Expression Evaluator",
            "07. Nested Square Root Evaluator",
            "08. Roman Numeral Validator and Converter",
            "09. Inconsistent Stones in Boxes",
            "10. Birthday Counter",
            "11. Neighbor Zone Maximizer",
            "12. Centrifuge Balance Checker",
            "13. Excel Column Number",
            "14. Funny Numbers",
            "15. Chess Pieces"
        ],
        4: [
            "01. Cycle Detection",
            "02. Shortest Path Finder",
            "03. Max Sum Longest Path in DAG",
            "04. Constrained Shortest Path",
            "05. Largest Island",
            "06. Message from Space",
            "07. Vampire Number",
            "08. Poker Hand Ranking",
            "09. Hexagonal Grid - Distance",
            "10. Casino Security",
        ]

    };

    function updateTaskNames() {
        const tasks = tasksForButton[selectedLevel] || tasksForButton[0];

        taskCards.forEach((card, index) => {
            if (index >= taskCards.length - 5) {
                card.classList.add('hidden');
            }
        });

        taskCards.forEach((card, index) => {
            if (tasks[index]) {
                card.textContent = tasks[index];
            }

            if (selectedLevel === "4" && index >= taskCards.length - 5) {
                card.classList.add('hidden');
            }
            else {
                card.classList.remove('hidden');
            }
        });
    }

    updateTaskNames();
});
