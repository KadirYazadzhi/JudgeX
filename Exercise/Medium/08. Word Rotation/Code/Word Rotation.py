import sys

def rotate_right(input_str):
    temp = input_str[-1]
    input_str = input_str[:-1]
    input_str = temp + input_str
    return input_str

def main():
    n = int(input())
    word = input().strip()

    for i in range(n):
        if i > 0:
            print(", ", end="")
        print(word, end="")
        word = rotate_right(word)

    print()

if __name__ == "__main__":
    main()