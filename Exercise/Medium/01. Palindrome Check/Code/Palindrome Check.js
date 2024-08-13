function palindromeCheck(line) {
    for (let i = 0; i < line.length / 2; i++) {
        if (line[i] !== line[line.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(palindromeCheck("hello") ? "True" : "False");
console.log(palindromeCheck("radar") ? "True" : "False");
