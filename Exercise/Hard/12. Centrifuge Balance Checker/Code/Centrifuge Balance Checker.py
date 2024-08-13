def cFuge(n, k):
    if n == 1 or k == 1:
        return False
    if n % 2 != 0:
        return n == k
    return (n - k) % 2 == 0

input_str = input()
n_str, k_str = input_str.split(',')

n = int(n_str)
k = int(k_str)

if cFuge(n, k):
    print("true")
else:
    print("false")

