def is_vampire_number(n):
    str_n = str(n)
    len_n = len(str_n)

    if n < 100:
        return "Normal Number"
    
    digits = sorted(str_n)
    
    if len_n % 2 == 0:
        while True:
            part1 = ''.join(digits[:len_n // 2])
            part2 = ''.join(digits[len_n // 2:])
   
            num1 = int(part1)
            num2 = int(part2)
            
            if num1 * num2 == n and part1[0] != '0' and part2[0] != '0':
                return "True Vampire"
            
            if not next_permutation(digits):
                break
    else:
        while True:
            for i in range(1, len_n):
                part1 = ''.join(digits[:i])
                part2 = ''.join(digits[i:])
                
                num1 = int(part1)
                num2 = int(part2)
                
                if num1 * num2 == n and part1[0] != '0' and part2[0] != '0':
                    return "Pseudovampire"
            
            if not next_permutation(digits):
                break
    
    return "Normal Number"

def next_permutation(array):
    i = len(array) - 2
    while i >= 0 and array[i] >= array[i + 1]:
        i -= 1
    
    if i < 0:
        return False
    
    j = len(array) - 1
    while array[j] <= array[i]:
        j -= 1
    
    array[i], array[j] = array[j], array[i]
    array[i + 1:] = reversed(array[i + 1:])
    
    return True

if __name__ == "__main__":
    n = int(input())
    print(is_vampire_number(n))
