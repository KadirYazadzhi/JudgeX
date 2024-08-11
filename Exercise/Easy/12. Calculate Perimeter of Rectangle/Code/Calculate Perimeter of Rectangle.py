import sys

def calculate_perimeter(length, width):
    result = 2 * (length + width)
    print(result)

if __name__ == "__main__":
    length, width = map(int, sys.stdin.readline().split())

    calculate_perimeter(length, width)

    sys.exit(0)