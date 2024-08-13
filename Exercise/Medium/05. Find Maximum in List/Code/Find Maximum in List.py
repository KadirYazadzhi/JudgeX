import sys

line = sys.stdin.readline().strip()

numbers = []
for temp in line.split(','):
    num = int(temp)
    numbers.append(num)

maximum = float('-inf')
for num in numbers:
    if num > maximum:
        maximum = num

print(maximum)