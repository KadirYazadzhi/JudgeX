def create_full_matrix(n, arr):
    num = 1
    for i in range(n):
        for j in range(n):
            arr[i][j] = num
            num += 1

def print_matrix(n, arr):
    for i in range(n):
        for j in range(n):
            print(arr[i][j], end=" ")
        print()

if __name__ == "__main__":
    n = int(input())

    arr = [[0 for _ in range(n)] for _ in range(n)]

    create_full_matrix(n, arr)
    print_matrix(n, arr)