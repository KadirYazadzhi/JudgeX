import java.util.*;

class Main {
    static class Node implements Comparable<Node> {
        int distance;
        int vertex;
        List<Integer> path;

        Node(int distance, int vertex, List<Integer> path) {
            this.distance = distance;
            this.vertex = vertex;
            this.path = path;
        }

        @Override
        public int compareTo(Node other) {
            return Integer.compare(this.distance, other.distance);
        }
    }

    public static List<Integer> shortestPath(int n, int[][] distances, int start, int end) {
        PriorityQueue<Node> minHeap = new PriorityQueue<>();
        minHeap.add(new Node(0, start, new ArrayList<>()));

        while (!minHeap.isEmpty()) {
            Node current = minHeap.poll();

            if (current.vertex == end) {
                current.path.add(current.vertex);
                return current.path;
            }

            for (int neighbor = 0; neighbor < n; neighbor++) {
                if (distances[current.vertex][neighbor] != Integer.MAX_VALUE && neighbor != current.vertex) {
                    List<Integer> newPath = new ArrayList<>(current.path);
                    newPath.add(current.vertex);
                    minHeap.add(new Node(current.distance + distances[current.vertex][neighbor], neighbor, newPath));
                }
            }
        }

        return new ArrayList<>();
    }

    public static void main(String[] args) {
        int n = 5;
        int[][] distances = {
            {0, 3, 1, Integer.MAX_VALUE, Integer.MAX_VALUE},
            {3, 0, 7, 5, 1},
            {1, 7, 0, 2, 3},
            {Integer.MAX_VALUE, 5, 2, 0, 7},
            {Integer.MAX_VALUE, 1, 3, 7, 0}
        };

        int start = 0;
        int end = 4;

        List<Integer> result = shortestPath(n, distances, start, end);
        for (int vertex : result) {
            System.out.print(vertex + " ");
        }
        System.out.println();
    }
}




