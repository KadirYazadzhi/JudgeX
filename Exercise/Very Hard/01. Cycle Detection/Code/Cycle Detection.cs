using System;
using System.Collections.Generic;

class Program {
    static List<int>[] graph;
    static bool[] visited;
    static bool[] recStack;

    static bool DFS(int node) {
        visited[node] = true;
        recStack[node] = true;

        foreach (int neighbor in graph[node]) {
            if (!visited[neighbor]) {
                if (DFS(neighbor)) {
                    return true;
                }
            } else if (recStack[neighbor]) {
                return true;
            }
        }

        recStack[node] = false;
        return false;
    }

    static bool HasCycle(int n, List<Tuple<int, int>> edges) {
        graph = new List<int>[n];
        visited = new bool[n];
        recStack = new bool[n];

        for (int i = 0; i < n; i++) {
            graph[i] = new List<int>();
        }

        foreach (var edge in edges) {
            graph[edge.Item1].Add(edge.Item2);
        }

        for (int node = 0; node < n; node++) {
            if (!visited[node]) {
                if (DFS(node)) {
                    return true;
                }
            }
        }

        return false;
    }

    static void Main() {
        int n = int.Parse(Console.ReadLine());
        int m = int.Parse(Console.ReadLine());
        var edges = new List<Tuple<int, int>>();
        for (int i = 0; i < m; i++) {
            var input = Console.ReadLine().Split();
            edges.Add(new Tuple<int, int>(int.Parse(input[0]), int.Parse(input[1])));
        }

        if (HasCycle(n, edges)) {
            Console.WriteLine("True");
        } else {
            Console.WriteLine("False");
        }
    }
}



