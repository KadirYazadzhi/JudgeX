def calculate_sum(num1, num2):
    print(num1 + num2)

def main():
    num1, num2 = map(int, input().split())

    calculate_sum(num1, num2)

    return 0

if __name__ == "__main__":
    main()