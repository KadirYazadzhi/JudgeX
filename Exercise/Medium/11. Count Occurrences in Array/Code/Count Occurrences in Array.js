function fillArray(numbers, n) {
    let line = "1 2 3 4 5"; 
    let tokens = line.split(' ');

    for (let i = 0; i < n; i++) {
        numbers[i] = parseInt(tokens[i]);
    }
}

function countOccurrences(numbers, num) {
    let counter = 0;
    while (numbers.length > 0) {
        if (numbers.pop() === num) {
            counter++;
        }
    }
    console.log(counter);
}

const n = 5;  
const numbers = new Array(n).fill(0);

fillArray(numbers, n);
countOccurrences(numbers, 3);
