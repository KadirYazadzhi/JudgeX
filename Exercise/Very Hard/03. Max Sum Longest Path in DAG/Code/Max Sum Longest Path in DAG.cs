using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    const int NEG_INF = int.MinValue;

    class Edge {
        public int V { get; set; }
        public int W { get; set; }
    }

    static void FindLongestPath(int n, List<List<Edge>> graph, int start, out List<int> path, out int maxSum) {
        int[] distance = new int[n];
        int[] topoOrder = new int[n];
        int[] indegree = new int[n];
        bool[] visited = new bool[n];
        Array.Fill(distance, NEG_INF);
        distance[start] = 0;
        path = new List<int>();

        for (int i = 0; i < n; i++) {
            foreach (var edge in graph[i]) {
                indegree[edge.V]++;
            }
        }

        Queue<int> zeroIndegree = new Queue<int>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                zeroIndegree.Enqueue(i);
            }
        }

        int topoIndex = 0;
        while (zeroIndegree.Count > 0) {
            int node = zeroIndegree.Dequeue();
            topoOrder[topoIndex++] = node;
            foreach (var edge in graph[node]) {
                indegree[edge.V]--;
                if (indegree[edge.V] == 0) {
                    zeroIndegree.Enqueue(edge.V);
                }
            }
        }

        foreach (var node in topoOrder) {
            if (distance[node] != NEG_INF) {
                foreach (var edge in graph[node]) {
                    if (distance[edge.V] < distance[node] + edge.W) {
                        distance[edge.V] = distance[node] + edge.W;
                    }
                }
            }
        }

        int endNode = Array.IndexOf(distance, distance.Max());
        maxSum = distance[endNode];

        int currentNode = endNode;
        while (currentNode != start) {
            path.Add(currentNode);
            foreach (var edge in graph[currentNode]) {
                if (distance[currentNode] == distance[edge.V] + edge.W) {
                    currentNode = edge.V;
                    break;
                }
            }
        }
        path.Add(start);
        path.Reverse();
    }

    static void Main() {
        int n = 5;
        List<List<Edge>> graph = new List<List<Edge>>();
        for (int i = 0; i < n; i++) {
            graph.Add(new List<Edge>());
        }

        graph[0].Add(new Edge { V = 1, W = 5 });
        graph[0].Add(new Edge { V = 2, W = 3 });
        graph[1].Add(new Edge { V = 3, W = 6 });
        graph[1].Add(new Edge { V = 2, W = 2 });
        graph[2].Add(new Edge { V = 4, W = 4 });
        graph[3].Add(new Edge { V = 4, W = -1 });

        int start = 0;
        FindLongestPath(n, graph, start, out List<int> path, out int maxSum);

        foreach (var node in path) {
            Console.Write(node + " ");
        }
        Console.WriteLine("\nSum: " + maxSum);
    }
}



