def roman_to_int(s):
    roman_values = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
                    'C': 100, 'D': 500, 'M': 1000}

    result = 0
    prev_value = 0

    for c in reversed(s):
        current_value = roman_values[c]

        if current_value >= prev_value:
            result += current_value
        else:
            result -= current_value

        prev_value = current_value

    return result


def is_valid_roman(s):
    valid_chars = set('IVXLCDM')
    return all(c in valid_chars for c in s)


def main():
    roman = input().strip()

    if not is_valid_roman(roman):
        print("Error: Invalid Roman numeral")
    else:
        arabic = roman_to_int(roman)
        print(arabic)


if __name__ == "__main__":
    main()
