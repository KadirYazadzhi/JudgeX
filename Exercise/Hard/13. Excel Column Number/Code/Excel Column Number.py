def title_to_number(s):
    result = 0
    for char in s:
        result = result * 26 + (ord(char) - ord('A') + 1)
    return result

s = input()
number = title_to_number(s)
print(number)
