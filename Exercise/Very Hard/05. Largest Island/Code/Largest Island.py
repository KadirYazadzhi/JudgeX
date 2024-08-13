def largest_island(matrix):
    def dfs(x, y):
        if x < 0 or y < 0 or x >= 10 or y >= 10 or matrix[x][y] == 0:
            return 0
        matrix[x][y] = 0 
        count = 1
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (-1, 1), (1, -1), (1, 1)]:
            count += dfs(x + dx, y + dy)
        return count

    max_island_size = 0
    for i in range(10):
        for j in range(10):
            if matrix[i][j] == 1:
                max_island_size = max(max_island_size, dfs(i, j))
    return max_island_size

matrix = []
for _ in range(10):
    row = list(map(int, input().split()))
    matrix.append(row)

result = largest_island(matrix)
print(result)
