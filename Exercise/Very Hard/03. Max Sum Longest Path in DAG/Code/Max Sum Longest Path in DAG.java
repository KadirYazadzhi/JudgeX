import java.util.*;

public class LongestPath {
    static final int NEG_INF = Integer.MIN_VALUE;

    static class Edge {
        int v, w;

        Edge(int v, int w) {
            this.v = v;
            this.w = w;
        }
    }

    public static List<Integer> findLongestPath(int n, List<List<Edge>> graph, int start) {
        int[] distance = new int[n];
        Arrays.fill(distance, NEG_INF);
        distance[start] = 0;
        List<Integer> topoOrder = new ArrayList<>();
        int[] indegree = new int[n];

        for (int u = 0; u < n; u++) {
            for (Edge edge : graph.get(u)) {
                indegree[edge.v]++;
            }
        }

        Deque<Integer> zeroIndegree = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                zeroIndegree.add(i);
            }
        }

        while (!zeroIndegree.isEmpty()) {
            int node = zeroIndegree.poll();
            topoOrder.add(node);
            for (Edge edge : graph.get(node)) {
                indegree[edge.v]--;
                if (indegree[edge.v] == 0) {
                    zeroIndegree.add(edge.v);
                }
            }
        }

        for (int node : topoOrder) {
            if (distance[node] != NEG_INF) {
                for (Edge edge : graph.get(node)) {
                    if (distance[edge.v] < distance[node] + edge.w) {
                        distance[edge.v] = distance[node] + edge.w;
                    }
                }
            }
        }

        int endNode = 0;
        for (int i = 1; i < n; i++) {
            if (distance[i] > distance[endNode]) {
                endNode = i;
            }
        }

        List<Integer> path = new ArrayList<>();
        int currentNode = endNode;
        while (currentNode != start) {
            path.add(currentNode);
            for (Edge edge : graph.get(currentNode)) {
                if (distance[currentNode] == distance[edge.v] + edge.w) {
                    currentNode = edge.v;
                    break;
                }
            }
        }
        path.add(start);
        Collections.reverse(path);

        return path;
    }

    public static void main(String[] args) {
        int n = 5;
        List<List<Edge>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        graph.get(0).add(new Edge(1, 5));
        graph.get(0).add(new Edge(2, 3));
        graph.get(1).add(new Edge(3, 6));
        graph.get(1).add(new Edge(2, 2));
        graph.get(2).add(new Edge(4, 4));
        graph.get(3).add(new Edge(4, -1));

        int start = 0;
        List<Integer> path = findLongestPath(n, graph, start);

        for (int node : path) {
            System.out.print(node + " ");
        }
        System.out.println();
    }
}



