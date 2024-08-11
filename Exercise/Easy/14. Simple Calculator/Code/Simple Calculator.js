function simpleCalculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            console.log(result);
            break;
        case '-':
            result = num1 - num2;
            console.log(result);
            break;
        case '*':
            result = num1 * num2;
            console.log(result);
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(result);
            } else {
                console.log("Cannot divide by zero");
            }
            break;
        case '%':
            if (num2 !== 0) {
                result = num1 % num2;
                console.log(result);
            } else {
                console.log("Cannot divide by zero");
            }
            break;
        case '^':
            result = Math.pow(num1, num2);
            console.log(result);
            break;
        default:
            console.log("Invalid operator");
    }
}

simpleCalculator(3, 4, '+'); 
simpleCalculator(10, 5, '*'); 
simpleCalculator(5, 2, '-'); 
simpleCalculator(8, 0, '/'); 
