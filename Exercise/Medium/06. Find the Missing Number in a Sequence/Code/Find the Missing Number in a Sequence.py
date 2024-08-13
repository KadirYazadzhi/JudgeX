import sys

def find_missing_number(arr):
    expected_sum = (arr[0] + arr[-1]) * (len(arr) + 1) / 2
    actual_sum = 0
    for num in arr:
        actual_sum += num
    return expected_sum - actual_sum

def main():
    line = input()

    arr = list(map(int, line.split(',')))

    print(find_missing_number(arr))

if __name__ == "__main__":
    main()