def palindrome_check(line):
    for i in range(len(line) // 2):
        if line[i] != line[-i - 1]:
            return False
    return True

if __name__ == "__main__":
    line = input()

    if palindrome_check(line):
        print("True")
    else:
        print("False")