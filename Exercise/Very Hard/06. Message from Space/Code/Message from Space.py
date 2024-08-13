def space(s):
    d1 = s.find("[")
    d2 = d1
    for i in range(d1 + 1, len(s)):
        if s[i] == '[':
            d1 = i
        if s[i] == ']':
            d2 = i
            break
    rep = ""
    d = int(s[d1 + 1])
    for i in range(d):
        rep += s[d1 + 2:d2]
    return s[:d1] + rep + s[d2 + 1:]

def space_message(s):
    while "[" in s:
        s = space(s)
    return s

def main():
    s = input().strip()
    print(space_message(s))

if __name__ == "__main__":
    main()
