import sys

def count_words(line):
    line = sys.stdin.readline().strip()
    words = line.split()
    return len(words)

def main():
    line = ""
    print(count_words(line))

if __name__ == "__main__":
    main()