def casino_security(s):
    thief_pos = s.find('T')
    money_pos = s.find('$')
    guard_pos = s.find('G')

    if thief_pos == -1 or money_pos == -1:
        return "Safe"

    if (thief_pos < money_pos < guard_pos) or (guard_pos < money_pos < thief_pos):
        return "Safe"

    return "ALARM!"

def main():
    input_str = input()
    result = casino_security(input_str)
    print(result)

if __name__ == "__main__":
    main()
