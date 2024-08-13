def max_zone(matrix):
    if not matrix or not matrix[0]:
        return 0
    
    rows = len(matrix)
    cols = len(matrix[0])
    visited = [[False] * cols for _ in range(rows)]
    max_count = 0

    def is_valid(x, y, target):
        return 0 <= x < rows and 0 <= y < cols and not visited[x][y] and matrix[x][y] == target

    def dfs(x, y, target):
        stack = [(x, y)]
        count = 0
        while stack:
            cx, cy = stack.pop()
            if visited[cx][cy]:
                continue
            visited[cx][cy] = True
            count += 1
            for nx, ny in [(cx-1, cy), (cx+1, cy), (cx, cy-1), (cx, cy+1)]:
                if is_valid(nx, ny, target):
                    stack.append((nx, ny))
        return count

    for i in range(rows):
        for j in range(cols):
            if not visited[i][j]:
                zone_size = dfs(i, j, matrix[i][j])
                if zone_size > max_count:
                    max_count = zone_size

    return max_count

def main():
    matrix = []
    while True:
        line = input().strip()
        if not line:
            break
        row = line.split()
        matrix.append(row)

    result = max_zone(matrix)
    print(result)

if __name__ == "__main__":
    main()

