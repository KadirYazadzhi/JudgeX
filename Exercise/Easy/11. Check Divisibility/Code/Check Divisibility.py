def check_divisibility(num1, num2):
    if num1 % num2 == 0:
        return True
    return False

if __name__ == "__main__":
    num1, num2 = map(int, input().split())

    if check_divisibility(num1, num2):
        print("Divisible")
    else:
        print("Not Divisible")