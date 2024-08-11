import sys

def digit_splitter(number):
    num_str = str(number)
    for c in num_str:
        print(c)

def main():
    number = int(input())
    digit_splitter(number)

if __name__ == "__main__":
    main()