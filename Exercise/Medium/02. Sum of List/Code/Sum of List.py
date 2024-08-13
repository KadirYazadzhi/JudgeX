import sys

def sum_list():
    line = sys.stdin.readline().strip()
    istr = line.split()
    
    total_sum = 0
    for num in istr:
        total_sum += int(num)

    print(total_sum)


if __name__ == "__main__":
    sum_list()