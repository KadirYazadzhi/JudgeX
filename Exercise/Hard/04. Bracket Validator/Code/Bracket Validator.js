function isValidExpression(expression) {
    const stack = [];
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let char of expression) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (brackets[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

let expression = "(({[({})]}))";
if (isValidExpression(expression)) {
    console.log("True");
} else {
    console.log("False");
}
