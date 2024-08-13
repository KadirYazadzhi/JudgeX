function PalindromeCheck(line :string) :boolean {
    for (let i :number = 0; i < line.length / 2; i++) {
        if (line[i] !== line[line.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(PalindromeCheck("hello") ? "True" : "False");
console.log(PalindromeCheck("radar") ? "True" : "False");