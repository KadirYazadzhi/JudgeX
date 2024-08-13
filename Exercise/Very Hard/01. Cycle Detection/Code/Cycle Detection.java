import java.util.*;

public class Main {
    static List<Integer>[] graph;
    static boolean[] visited;
    static boolean[] recStack;

    static boolean dfs(int node) {
        visited[node] = true;
        recStack[node] = true;

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) {
                    return true;
                }
            } else if (recStack[neighbor]) {
                return true;
            }
        }

        recStack[node] = false;
        return false;
    }

    static boolean hasCycle(int n, List<int[]> edges) {
        graph = new ArrayList[n];
        visited = new boolean[n];
        recStack = new boolean[n];

        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] edge : edges) {
            graph[edge[0]].add(edge[1]);
        }

        for (int node = 0; node < n; node++) {
            if (!visited[node]) {
                if (dfs(node)) {
                    return true;
                }
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            int u = scanner.nextInt();
            int v = scanner.nextInt();
            edges.add(new int[]{u, v});
        }

        if (hasCycle(n, edges)) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }
    }
}




