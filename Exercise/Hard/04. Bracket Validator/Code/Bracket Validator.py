def is_valid_expression(expression):
    stack = []
    opening_brackets = "({["
    closing_brackets = ")}]"

    for char in expression:
        if char in opening_brackets:
            stack.append(char)
        elif char in closing_brackets:
            if not stack or not is_valid_pair(stack.pop(), char):
                return False

    return len(stack) == 0

def is_valid_pair(opening, closing):
    return (opening == '(' and closing == ')') or \
           (opening == '{' and closing == '}') or \
           (opening == '[' and closing == ']')

def main():
    expression = input().strip()

    if is_valid_expression(expression):
        print("True")
    else:
        print("False")

if __name__ == "__main__":
    main()
