function evaluateExpression(expression) {
    try {
        return eval(expression); 
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}
console.log(evaluateExpression((3 + 5 * 2 + 1) / 2));

