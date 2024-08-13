import sys

def read_vector(numbers):
    line = sys.stdin.readline().strip()
    istr = line.split()

    for num in istr:
        numbers.append(int(num))

def find_number(numbers):
    num = int(input())

    counter = 0
    while numbers:
        if numbers.pop() == num:
            counter += 1

    print(counter)

if __name__ == "__main__":
    numbers = []

    read_vector(numbers)
    find_number(numbers)