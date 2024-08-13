function FindMax(line: string): number {
    const tokens: string[] = line.split(',');
    const numbers: number[] = tokens.map(token => Number(token.trim()));
    
    let max: number = Number.MIN_SAFE_INTEGER;
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max; 
}

console.log(FindMax("1, 2, 3, 4, 5")); 
