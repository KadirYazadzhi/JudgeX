function isPangram(str) {
    const alphabet = new Set();
    for (let char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            alphabet.add(char);
        }
    }
    return alphabet.size === 26;
}

const input = "Pack my box with five dozen liquor jugs"; 
console.log(isPangram(input) ? "True" : "False"); 
