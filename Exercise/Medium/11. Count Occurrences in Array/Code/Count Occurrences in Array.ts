function FillArray(numbers: number[], n: number) {
    let line = "1 2 3 4 5";  // Example input
    let tokens = line.split(' ');

    for (let i = 0; i < n; i++) {
        numbers[i] = parseInt(tokens[i]);
    }
}

function CountOccurrences(numbers: number[], num: number) {
    let counter = 0;
    while (numbers.length > 0) {
        if (numbers.pop() === num) {
            counter++;
        }
    }
    console.log(counter);
}

// Directly initialize the input
const n1: number = 5;  // Example input
const numbers1: number[] = new Array(n).fill(0);

FillArray(numbers1, n1);
CountOccurrences(numbers1, 3);

