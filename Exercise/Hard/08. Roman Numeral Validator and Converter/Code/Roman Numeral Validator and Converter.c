#include <stdio.h>
#include <stdbool.h>

int romanToInt(char *s) {
    int romanValues[26];
    romanValues['I' - 'A'] = 1;
    romanValues['V' - 'A'] = 5;
    romanValues['X' - 'A'] = 10;
    romanValues['L' - 'A'] = 50;
    romanValues['C' - 'A'] = 100;
    romanValues['D' - 'A'] = 500;
    romanValues['M' - 'A'] = 1000;

    int result = 0, prevValue = 0;

    for (int i = 0; s[i] != '\0'; i++) {
        int currentValue = romanValues[s[i] - 'A'];

        if (currentValue > prevValue) {
            result += (currentValue - 2 * prevValue);
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

bool isValidRoman(char *s) {
    for (; *s; s++) {
        if (*s != 'I' && *s != 'V' && *s != 'X' && *s != 'L' &&
            *s != 'C' && *s != 'D' && *s != 'M') {
            return false;
        }
    }
    return true;
}

int main() {
    char roman[100];
    scanf("%s", roman);

    if (!isValidRoman(roman)) {
        printf("Error: Invalid Roman numeral\n");
    } else {
        int arabic = romanToInt(roman);
        printf("%d\n", arabic);
    }

    return 0;
}
