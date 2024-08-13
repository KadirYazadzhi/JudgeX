import sys

def main():
    input_str = input()
    words = input_str.split()
    words.sort()

    for i in range(len(words)):
        print(words[i], end='')
        if i < len(words) - 1:
            print(', ', end='')

    return 0

if __name__ == "__main__":
    sys.exit(main())