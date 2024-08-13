using System;
using System.Collections.Generic;

class Program {
    class Node : IComparable<Node> {
        public int Distance;
        public int Vertex;
        public List<int> Path;

        public int CompareTo(Node other) {
            return Distance.CompareTo(other.Distance);
        }
    }

    static List<int> ShortestPath(int n, int[,] distances, int start, int end) {
        var minHeap = new SortedSet<Node>(Comparer<Node>.Create((a, b) => 
            a.Distance == b.Distance ? a.Vertex.CompareTo(b.Vertex) : a.Distance.CompareTo(b.Distance)));
        minHeap.Add(new Node { Distance = 0, Vertex = start, Path = new List<int>() });

        while (minHeap.Count > 0) {
            var current = minHeap.Min;
            minHeap.Remove(current);

            if (current.Vertex == end) {
                current.Path.Add(current.Vertex);
                return current.Path;
            }

            for (int neighbor = 0; neighbor < n; neighbor++) {
                if (distances[current.Vertex, neighbor] != int.MaxValue && neighbor != current.Vertex) {
                    var newPath = new List<int>(current.Path) { current.Vertex };
                    minHeap.Add(new Node {
                        Distance = current.Distance + distances[current.Vertex, neighbor],
                        Vertex = neighbor,
                        Path = newPath
                    });
                }
            }
        }

        return new List<int>();
    }

    static void Main() {
        int n = 5;
        int[,] distances = {
            { 0, 3, 1, int.MaxValue, int.MaxValue },
            { 3, 0, 7, 5, 1 },
            { 1, 7, 0, 2, 3 },
            { int.MaxValue, 5, 2, 0, 7 },
            { int.MaxValue, 1, 3, 7, 0 }
        };

        int start = 0;
        int end = 4;

        var result = ShortestPath(n, distances, start, end);
        Console.WriteLine(string.Join(" ", result));
    }
}



