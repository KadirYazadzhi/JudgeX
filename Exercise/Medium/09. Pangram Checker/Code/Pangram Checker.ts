function IsPangram(str: string): boolean {
    const alphabet: Set<string> = new Set();
    for (let char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            alphabet.add(char);
        }
    }
    return alphabet.size === 26;
}

const input1: string = "Pack my box with five dozen liquor jugs";
console.log(IsPangram(input1) ? "True" : "False"); 
