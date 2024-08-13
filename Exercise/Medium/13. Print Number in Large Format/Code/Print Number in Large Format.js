function printLargeDigit(digit) {
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

function printLargeNumber(number) {
    if (number === 0) {
        printLargeDigit(0);
        return;
    }

    const digits = [];
    while (number > 0) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }

    for (let i = digits.length - 1; i >= 0; --i) {
        printLargeDigit(digits[i]);
    }
}
printLargeNumber(12);
