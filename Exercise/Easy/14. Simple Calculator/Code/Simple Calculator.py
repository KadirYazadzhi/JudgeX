import math

def simple_calculator(num1, num2, operator_char):
    result = 0
    if operator_char == '+':
        result = num1 + num2
        print(result)
    elif operator_char == '-':
        result = num1 - num2
        print(result)
    elif operator_char == '*':
        result = num1 * num2
        print(result)
    elif operator_char == '/':
        if num2 != 0:
            result = num1 / num2
            print(result)
        else:
            print("Cannot divide by zero")
    elif operator_char == '%':
        if int(num2) != 0:
            result = int(num1) % int(num2)
            print(result)
        else:
            print("Cannot divide by zero")
    elif operator_char == '^':
        result = math.pow(num1, num2)
        print(result)
    else:
        print("Invalid operator")

if __name__ == "__main__":
    num1 = float(input())
    num2 = float(input())
    operator_char = input()

    simple_calculator(num1, num2, operator_char)