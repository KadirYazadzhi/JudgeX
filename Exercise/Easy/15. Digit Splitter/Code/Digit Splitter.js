function digitSplitter(number) {
    const numStr = number.toString();
    for (const digit of numStr) {
        console.log(digit);
    }
}

const number = 12567;
digitSplitter(number);
