function RotateRight(str: string): string {
    return str[str.length - 1] + str.substring(0, str.length - 1);
}

const n1: number = 5;  
const word1: string = "hello"; 
let result1: string[] = [];

let CurrentWord: string = word1;
for (let i = 0; i < n1; i++) {
    result1.push(currentWord);
    CurrentWord = RotateRight(currentWord);
}

console.log(result1.join(', '));  
