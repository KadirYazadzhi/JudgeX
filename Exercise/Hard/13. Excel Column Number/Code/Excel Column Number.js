function titleToNumber(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result = result * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return result;
}

console.log(titleToNumber("A"));   
console.log(titleToNumber("AB"));  

