function DigitSplitter(number: number): void {
    const numStr = number.toString();
    for (const digit of numStr) {
        console.log(digit);
    }
}

const Num: number = 12567;
DigitSplitter(Num);
