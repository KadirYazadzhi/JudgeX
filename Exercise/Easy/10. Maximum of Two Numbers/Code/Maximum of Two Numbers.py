def max_numbers(num1, num2):
    if num1 > num2:
        print(num1)
    else:
        print(num2)

if __name__ == "__main__":
    num1, num2 = map(int, input().split())

    max_numbers(num1, num2)