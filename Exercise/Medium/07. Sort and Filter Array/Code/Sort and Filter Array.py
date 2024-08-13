import sys

def sort_and_filter(arr):
    count5 = 0
    count6 = 0
    count7 = 0

    for num in arr:
        if num == 5:
            count5 += 1
        elif num == 6:
            count6 += 1
        elif num == 7:
            count7 += 1

    for i in range(count5):
        print("5", end=" ")
    for i in range(count6):
        print("6", end=" ")
    for i in range(count7):
        print("7", end=" ")
    print()

def main():
    line = input()

    arr = []
    ss = line.split()
    for num in ss:
        num = int(num)
        if num >= 5 and num <= 7:
            arr.append(num)

    sort_and_filter(arr)
    return 0

if __name__ == "__main__":
    sys.exit(main())