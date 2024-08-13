using System;
using System.Collections.Generic;

class Program {
    static int MaxZone(List<List<string>> matrix) {
        int rows = matrix.Count;
        if (rows == 0) return 0;
        int cols = matrix[0].Count;
        if (cols == 0) return 0;

        bool[,] visited = new bool[rows, cols];
        int maxCount = 0;

        Func<int, int, string, bool> isValid = (x, y, target) =>
            x >= 0 && x < rows && y >= 0 && y < cols && !visited[x, y] && matrix[x][y] == target;

        Func<int, int, string, int> dfs = null;
        dfs = (x, y, target) => {
            Stack<Tuple<int, int>> stack = new Stack<Tuple<int, int>>();
            stack.Push(new Tuple<int, int>(x, y));
            int count = 0;
            while (stack.Count > 0) {
                var (cx, cy) = stack.Pop();
                if (visited[cx, cy]) continue;
                visited[cx, cy] = true;
                count++;
                int[] dx = { -1, 1, 0, 0 };
                int[] dy = { 0, 0, -1, 1 };
                for (int k = 0; k < 4; ++k) {
                    int nx = cx + dx[k];
                    int ny = cy + dy[k];
                    if (isValid(nx, ny, target)) {
                        stack.Push(new Tuple<int, int>(nx, ny));
                    }
                }
            }
            return count;
        };

        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (!visited[i, j]) {
                    int zoneSize = dfs(i, j, matrix[i][j]);
                    if (zoneSize > maxCount) {
                        maxCount = zoneSize;
                    }
                }
            }
        }

        return maxCount;
    }

    static void Main() {
 
        List<List<string>> matrix = new List<List<string>>();
        string line;
        while ((line = Console.ReadLine()) != null) {
            if (line.Trim() == "") break;
            string[] parts = line.Trim().Split();
            matrix.Add(new List<string>(parts));
        }
    
        int result = MaxZone(matrix);
        Console.WriteLine(result);
    }
}



