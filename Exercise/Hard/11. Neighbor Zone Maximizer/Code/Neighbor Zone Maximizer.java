import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Stack;

public class Main {

    public static int maxZone(List<List<String>> matrix) {
        int rows = matrix.size();
        if (rows == 0) return 0;
        int cols = matrix.get(0).size();
        if (cols == 0) return 0;

        boolean[][] visited = new boolean[rows][cols];
        int maxCount = 0;

        Stack<int[]> stack = new Stack<>();

        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (!visited[i][j]) {
                    stack.push(new int[]{i, j});
                    int count = 0;
                    String target = matrix.get(i).get(j);
                    while (!stack.isEmpty()) {
                        int[] current = stack.pop();
                        int x = current[0];
                        int y = current[1];
                        if (visited[x][y]) continue;
                        visited[x][y] = true;
                        count++;
                        int[] dx = {-1, 1, 0, 0};
                        int[] dy = {0, 0, -1, 1};
                        for (int k = 0; k < 4; ++k) {
                            int nx = x + dx[k];
                            int ny = y + dy[k];
                            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny] && matrix.get(nx).get(ny).equals(target)) {
                                stack.push(new int[]{nx, ny});
                            }
                        }
                    }
                    if (count > maxCount) {
                        maxCount = count;
                    }
                }
            }
        }

        return maxCount;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<List<String>> matrix = new ArrayList<>();
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine().trim();
            if (line.isEmpty()) {
                break;
            }
            String[] parts = line.split("\\s+");
            List<String> row = new ArrayList<>();
            for (String part : parts) {
                row.add(part);
            }
            matrix.add(row);
        }

        int result = maxZone(matrix);
        System.out.println(result);
    }
}




