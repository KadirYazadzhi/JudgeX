import java.util.Scanner;

public class LargestIsland {
    private static final int N = 10;
    private static int[][] matrix = new int[N][N];
    private static boolean[][] visited = new boolean[N][N];

    private static int dfs(int x, int y) {
        if (x < 0 || y < 0 || x >= N || y >= N || matrix[x][y] == 0 || visited[x][y]) {
            return 0;
        }
        visited[x][y] = true;
        int count = 1;
        int[] dx = {-1, 1, 0, 0, -1, -1, 1, 1};
        int[] dy = {0, 0, -1, 1, -1, 1, -1, 1};
        for (int i = 0; i < 8; i++) {
            count += dfs(x + dx[i], y + dy[i]);
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                matrix[i][j] = scanner.nextInt();
            }
        }

        int maxIslandSize = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (matrix[i][j] == 1 && !visited[i][j]) {
                    maxIslandSize = Math.max(maxIslandSize, dfs(i, j));
                }
            }
        }

        System.out.println(maxIslandSize);
    }
}




