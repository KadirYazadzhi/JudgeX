def tokenize_string(input_str, delimiter):
    tokens = []
    token = ""
    for ch in input_str:
        if ch == delimiter:
            if token:
                tokens.append(token)
                token = ""
        else:
            token += ch
    if token:
        tokens.append(token)
    return tokens

def main():
    input_str = input("Enter a string: ")
    delimiter = input("Enter a delimiter: ")[0]  

    tokens = tokenize_string(input_str, delimiter)

    for token in tokens:
        print(token)

if __name__ == "__main__":
    main()