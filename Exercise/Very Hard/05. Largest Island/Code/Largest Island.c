#include <stdio.h>

#define N 10

int dfs(int matrix[N][N], int visited[N][N], int x, int y) {
    if (x < 0 || y < 0 || x >= N || y >= N || matrix[x][y] == 0 || visited[x][y]) {
        return 0;
    }

    visited[x][y] = 1;
    int count = 1;

    int directions[8][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
    for (int i = 0; i < 8; i++) {
        int newX = x + directions[i][0];
        int newY = y + directions[i][1];
        count += dfs(matrix, visited, newX, newY);
    }

    return count;
}

int largestIsland(int matrix[N][N]) {
    int visited[N][N] = {0};
    int maxIslandSize = 0;

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (matrix[i][j] == 1 && !visited[i][j]) {
                int islandSize = dfs(matrix, visited, i, j);
                if (islandSize > maxIslandSize) {
                    maxIslandSize = islandSize;
                }
            }
        }
    }

    return maxIslandSize;
}

int main() {
    int matrix[N][N];

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }

    int result = largestIsland(matrix);
    printf("%d", result);

    return 0;
}

