function EvaluateExpression(expression: string): any {
    try {
        return eval(expression); 
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}
console.log(EvaluateExpression("(3 + 5 * 2 + 1) / 2"));


