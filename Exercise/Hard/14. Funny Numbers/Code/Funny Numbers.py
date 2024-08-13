def funny_number(n, p):
    digits = [int(digit) for digit in str(n)]
    sum_digits = sum(digit ** (p + i) for i, digit in enumerate(digits))
    return sum_digits // n if sum_digits % n == 0 else -1

n = int(input())
p = int(input())

print(funny_number(n, p))
