function funnyNumber(n, p) {
    const digits = n.toString().split('').map(Number);
    const sum = digits.reduce((acc, digit, i) => acc + Math.pow(digit, p + i), 0);
    return sum % n === 0 ? sum / n : -1;
}

console.log(funnyNumber(89, 1));   
console.log(funnyNumber(695, 2));   
console.log(funnyNumber(46288, 3)); 
console.log(funnyNumber(92, 1));    

