function ЕvaluateExpression(expression: string): any {
    try {
        expression = expression.replace(/√/g, 'Math.sqrt');
        return eval(expression);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return NaN;
    }
}
console.log(evaluateExpression("√(16) + √(25)"))


