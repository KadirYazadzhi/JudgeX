#include <stdio.h>
#include <stdbool.h>

#define MAX_ROWS 100
#define MAX_COLS 100

int maxZone(char matrix[MAX_ROWS][MAX_COLS], int rows, int cols) {
    bool visited[MAX_ROWS][MAX_COLS];
    int maxCount = 0;

    bool isValid(int x, int y, char target) {
        return x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y] && matrix[x][y] == target;
    }

    int dfs(int x, int y, char target) {
        int dx[] = {-1, 1, 0, 0};
        int dy[] = {0, 0, -1, 1};
        int stack[MAX_ROWS * MAX_COLS][2];  
        int top = -1;
        stack[++top][0] = x;
        stack[top][1] = y;
        int count = 0;

        while (top >= 0) {
            int cx = stack[top][0];
            int cy = stack[top][1];
            top--;
            if (visited[cx][cy]) continue;
            visited[cx][cy] = true;
            count++;
            for (int k = 0; k < 4; ++k) {
                int nx = cx + dx[k];
                int ny = cy + dy[k];
                if (isValid(nx, ny, target)) {
                    stack[++top][0] = nx;
                    stack[top][1] = ny;
                }
            }
        }
        return count;
    }


    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            if (!visited[i][j]) {
                int zoneSize = dfs(i, j, matrix[i][j]);
                if (zoneSize > maxCount) {
                    maxCount = zoneSize;
                }
            }
        }
    }

    return maxCount;
}

int main() {
    int rows, cols;
    char matrix[MAX_ROWS][MAX_COLS];

    scanf("%d %d", &rows, &cols);

    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            scanf(" %c", &matrix[i][j]);
        }
    }

    int result = maxZone(matrix, rows, cols);
    printf("%d\n", result);

    return 0;
}
