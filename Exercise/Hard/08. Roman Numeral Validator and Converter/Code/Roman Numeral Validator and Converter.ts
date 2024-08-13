function RomanToInt(s: string): number {
    const romanValues: { [key: string]: number } = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]];

        if (currentValue >= prevValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

function IsValidRoman(s: string): boolean {
    return /^[IVXLCDM]+$/.test(s);
}

let Roman = "MCMXCIV";
if (IsValidRoman(Roman)) {
    console.log(RomanToInt(Roman));
}
else {
    console.log("Error: Invalid Roman numeral");
}


