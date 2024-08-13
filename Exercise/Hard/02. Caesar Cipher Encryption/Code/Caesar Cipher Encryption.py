def caesar_cipher(text, shift):
    encrypted_text = []
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            encrypted_char = chr((ord(char) - base + shift) % 26 + base)
            encrypted_text.append(encrypted_char)
        else:
            encrypted_text.append(char)
    return ''.join(encrypted_text)

def main():
    text = input()
    shift = int(input())

    encrypted_text = caesar_cipher(text, shift)
    print(encrypted_text)

if __name__ == "__main__":
    main()
