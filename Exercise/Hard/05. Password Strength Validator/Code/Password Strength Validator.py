def is_strong_password(password):
    has_length = len(password) >= 8
    has_uppercase = any(char.isupper() for char in password)
    has_lowercase = any(char.islower() for char in password)
    has_digit = any(char.isdigit() for char in password)
    has_special_char = any(char in "!@#$%^&*()-_+=<>?" for char in password)

    return has_length and has_uppercase and has_lowercase and has_digit and has_special_char

def main():
    password = input().strip()

    if is_strong_password(password):
        print("Strong")
    else:
        print("Weak")

if __name__ == "__main__":
    main()
