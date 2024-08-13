function FactorialCalculation(num :number) :void {
    let factorial :number = num;
    for (let i :number = num - 1; i > 0; i--) {
        factorial *= i;
    }
    console.log(factorial);
}

FactorialCalculation(5);
FactorialCalculation(3);