function CheckDivisibility(num1 :number, num2 :number) {
    if (num1 % num2 === 0) {
        console.log("Divisible");
    }
    else {
        console.log("Not Divisible");
    }
}

CheckDivisibility(10, 2);
CheckDivisibility(10, 3);