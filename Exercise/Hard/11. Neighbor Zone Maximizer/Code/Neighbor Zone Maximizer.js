function maxZone(matrix) {
    const rows = matrix.length;
    if (rows === 0) return 0;
    const cols = matrix[0].length;
    if (cols === 0) return 0;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let maxCount = 0;

    const isValid = (x, y, target) =>
        x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y] && matrix[x][y] === target;

    const dfs = (x, y, target) => {
        const stack = [[x, y]];
        let count = 0;
        while (stack.length > 0) {
            const [cx, cy] = stack.pop();
            if (visited[cx][cy]) continue;
            visited[cx][cy] = true;
            count++;
            const dx = [-1, 1, 0, 0];
            const dy = [0, 0, -1, 1];
            for (let k = 0; k < 4; ++k) {
                const nx = cx + dx[k];
                const ny = cy + dy[k];
                if (isValid(nx, ny, target)) {
                    stack.push([nx, ny]);
                }
            }
        }
        return count;
    };

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (!visited[i][j]) {
                const zoneSize = dfs(i, j, matrix[i][j]);
                if (zoneSize > maxCount) {
                    maxCount = zoneSize;
                }
            }
        }
    }

    return maxCount;
}

const matrix = [
    ["normal", "rised", "rised", "normal"],
    ["rised", "normal", "rised", "concave"],
    ["concave", "normal", "normal", "normal"],
    ["normal", "rised", "rised", "normal"]
];

const result = maxZone(matrix);
console.log(result);

