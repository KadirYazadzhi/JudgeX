def factoriel_calculation(num):
    sum_value = num
    for i in range(num - 1, 0, -1):
        sum_value *= i
    print(sum_value)

if __name__ == "__main__":
    num = int(input())

    factoriel_calculation(num)