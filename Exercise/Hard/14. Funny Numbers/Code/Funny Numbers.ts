function FunnyNumber(n: number, p: number): number {
    const digits = n.toString().split('').map(Number);
    const sum = digits.reduce((acc, digit, i) => acc + Math.pow(digit, p + i), 0);
    return sum % n === 0 ? sum / n : -1;
}

console.log(FunnyNumber(89, 1));    
console.log(FunnyNumber(695, 2));   
console.log(FunnyNumber(46288, 3));
console.log(FunnyNumber(92, 1));    


