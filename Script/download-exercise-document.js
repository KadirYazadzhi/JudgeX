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

            if (selectedButton === "1") {
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
            else {
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


            const link = document.createElement('a');
            link.href = `Exercise/Easy/${fileName}`;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('Please select a task first.');
        }
    });
});