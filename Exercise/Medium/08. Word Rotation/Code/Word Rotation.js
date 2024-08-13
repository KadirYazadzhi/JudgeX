function rotateRight(str) {
    return str[str.length - 1] + str.substring(0, str.length - 1);
}

const n = 5; 
const word = "hello"; 
let result = [];

let currentWord = word;
for (let i = 0; i < n; i++) {
    result.push(currentWord);
    currentWord = rotateRight(currentWord);
}

console.log(result.join(', '));
