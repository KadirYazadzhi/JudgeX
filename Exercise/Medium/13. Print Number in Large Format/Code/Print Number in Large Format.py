def print_large_digit(digit):
    if digit == 0:
        print(" ##### ")
        print("#     #")
        print("#     #")
        print("#     #")
        print("#     #")
        print("#     #")
        print(" ##### ")
    elif digit == 1:
        print("   #   ")
        print("  ##   ")
        print("   #   ")
        print("   #   ")
        print("   #   ")
        print("   #   ")
        print(" ##### ")
    elif digit == 2:
        print(" ##### ")
        print("#     #")
        print("      #")
        print(" ##### ")
        print("#      ")
        print("#      ")
        print("#######")
    elif digit == 3:
        print(" ##### ")
        print("#     #")
        print("      #")
        print(" ##### ")
        print("      #")
        print("#     #")
        print(" ##### ")
    elif digit == 4:
        print("#      ")
        print("#    # ")
        print("#    # ")
        print("#######")
        print("     # ")
        print("     # ")
        print("     # ")
    elif digit == 5:
        print("#######")
        print("#      ")
        print("#      ")
        print(" ##### ")
        print("      #")
        print("#     #")
        print(" ##### ")
    elif digit == 6:
        print(" ##### ")
        print("#     #")
        print("#      ")
        print("###### ")
        print("#     #")
        print("#     #")
        print(" ##### ")
    elif digit == 7:
        print("#######")
        print("     # ")
        print("    #  ")
        print("   #   ")
        print("  #    ")
        print(" #     ")
        print("#      ")
    elif digit == 8:
        print(" ##### ")
        print("#     #")
        print("#     #")
        print(" ##### ")
        print("#     #")
        print("#     #")
        print(" ##### ")
    elif digit == 9:
        print(" ##### ")
        print("#     #")
        print("#     #")
        print("###### ")
        print("      #")
        print("#     #")
        print(" ##### ")

def print_large_number(number):
    if number == 0:
        print_large_digit(0)
        return

    digits = []
    while number > 0:
        digits.append(number % 10)
        number //= 10

    for digit in reversed(digits):
        print_large_digit(digit)

if __name__ == "__main__":
    number = int(input())
    print_large_number(number)