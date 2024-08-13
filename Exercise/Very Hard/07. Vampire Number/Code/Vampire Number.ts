function IsVampireNumber(n: number): string {
    let str: string = n.toString();
    let len: number = str.length;

    if (n < 100) {
        return "Normal Number";
    }
    
    let digits: string[] = str.split('');
    digits.sort();
    
    if (len % 2 === 0) {
        do {
            let part1: string = digits.slice(0, len / 2).join('');
            let part2: string = digits.slice(len / 2).join('');
            
            let num1: number = parseInt(part1, 10);
            let num2: number = parseInt(part2, 10);
            
            if (num1 * num2 === n && part1[0] !== '0' && part2[0] !== '0') {
                return "True Vampire";
            }
            
        } while (NextPermutation(digits));
    }
    else {
        do {
            for (let i: number = 1; i < len; ++i) {
                let part1: string = digits.slice(0, i).join('');
                let part2: string = digits.slice(i).join('');
                
                let num1: number = parseInt(part1, 10);
                let num2: number = parseInt(part2, 10);
                
                if (num1 * num2 === n && part1[0] !== '0' && part2[0] !== '0') {
                    return "Pseudovampire";
                }
            }
        } while (NextPermutation(digits));
    }
    
    return "Normal Number";
}

function NextPermutation(array: string[]): boolean {
    let i: number = array.length - 2;
    while (i >= 0 && array[i] >= array[i + 1]) {
        i--;
    }
    
    if (i < 0) {
        return false;
    }
    
    let j: number = array.length - 1;
    while (array[j] <= array[i]) {
        j--;
    }
    
    [array[i], array[j]] = [array[j], array[i]];
    array = array.slice(0, i + 1).concat(array.slice(i + 1).reverse());
    
    return true;
}

let N: number = 126;
console.log(IsVampireNumber(N));
