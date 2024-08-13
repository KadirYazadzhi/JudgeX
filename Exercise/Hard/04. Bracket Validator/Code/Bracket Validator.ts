function IsValidExpression(expression: string): boolean {
    const stack: string[] = [];
    const brackets: { [key: string]: string } = {
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

if (IsValidExpression("(({[({})]}))")) {
    console.log("True");
} else {
    console.log("False");
}


