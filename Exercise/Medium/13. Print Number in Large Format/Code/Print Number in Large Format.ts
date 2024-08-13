function PrintLargeDigit(digit: number): void {
    switch (digit) {
        case 0:
            console.log(" ##### ");
            console.log("#     #");
            console.log("#     #");
            console.log("#     #");
            console.log("#     #");
            console.log("#     #");
            console.log(" ##### ");
            break;
        case 1:
            console.log("   #   ");
            console.log("  ##   ");
            console.log("   #   ");
            console.log("   #   ");
            console.log("   #   ");
            console.log("   #   ");
            console.log(" ##### ");
            break;
        case 2:
            console.log(" ##### ");
            console.log("#     #");
            console.log("      #");
            console.log(" ##### ");
            console.log("#      ");
            console.log("#      ");
            console.log("#######");
            break;
        case 3:
            console.log(" ##### ");
            console.log("#     #");
            console.log("      #");
            console.log(" ##### ");
            console.log("      #");
            console.log("#     #");
            console.log(" ##### ");
            break;
        case 4:
            console.log("#      ");
            console.log("#    # ");
            console.log("#    # ");
            console.log("#######");
            console.log("     # ");
            console.log("     # ");
            console.log("     # ");
            break;
        case 5:
            console.log("#######");
            console.log("#      ");
            console.log("#      ");
            console.log(" ##### ");
            console.log("      #");
            console.log("#     #");
            console.log(" ##### ");
            break;
        case 6:
            console.log(" ##### ");
            console.log("#     #");
            console.log("#      ");
            console.log("###### ");
            console.log("#     #");
            console.log("#     #");
            console.log(" ##### ");
            break;
        case 7:
            console.log("#######");
            console.log("     # ");
            console.log("    #  ");
            console.log("   #   ");
            console.log("  #    ");
            console.log(" #     ");
            console.log("#      ");
            break;
        case 8:
            console.log(" ##### ");
            console.log("#     #");
            console.log("#     #");
            console.log(" ##### ");
            console.log("#     #");
            console.log("#     #");
            console.log(" ##### ");
            break;
        case 9:
            console.log(" ##### ");
            console.log("#     #");
            console.log("#     #");
            console.log("###### ");
            console.log("      #");
            console.log("#     #");
            console.log(" ##### ");
            break;
    }
}

function PrintLargeNumber(number: number): void {
    if (number === 0) {
        PrintLargeDigit(0);
        return;
    }

    const digits: number[] = [];
    while (number > 0) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }

    for (let i = digits.length - 1; i >= 0; --i) {
        PrintLargeDigit(digits[i]);
    }
}

PrintLargeNumber(12);

