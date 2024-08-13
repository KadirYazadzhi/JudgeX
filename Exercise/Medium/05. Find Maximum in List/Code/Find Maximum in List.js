function findMax(line) {
    const tokens = line.split(',');
    const numbers = tokens.map(Number);
    
    let max = Number.MIN_SAFE_INTEGER;
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max; 
}

console.log(findMax("1, 2, 3, 4, 5")); 





