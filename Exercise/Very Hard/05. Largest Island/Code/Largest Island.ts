function LargestIsland(matrix: number[][]): number {
    function dfs(x: number, y: number): number {
        if (x < 0 || y < 0 || x >= 10 || y >= 10 || matrix[x][y] === 0) {
            return 0;
        }
        matrix[x][y] = 0; 
        let count = 1;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (const [dx, dy] of directions) {
            count += dfs(x + dx, y + dy);
        }
        return count;
    }

    let maxIslandSize = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (matrix[i][j] === 1) {
                maxIslandSize = Math.max(maxIslandSize, dfs(i, j));
            }
        }
    }
    return maxIslandSize;
}

const Matrix: number[][] = [
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

console.log(LargestIsland(Matrix));
