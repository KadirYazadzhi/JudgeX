function CaesarCipher(input: string, shift: number): string {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char.match(/[a-z]/i)) {
            let code = input.charCodeAt(i);

            if (code >= 65 && code <= 90) { 
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { 
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}

console.log(CaesarCipher("A friend in need is a friend indeed", 20));


