function SimpleCalculator(num1: number, num2: number, operator: string): void {
    let result: number | string;
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

SimpleCalculator(3, 4, '+'); 
SimpleCalculator(10, 5, '*');
SimpleCalculator(5, 2, '-');
SimpleCalculator(8, 0, '/'); 
