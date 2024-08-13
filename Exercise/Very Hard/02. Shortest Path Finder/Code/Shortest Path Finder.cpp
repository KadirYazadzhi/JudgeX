#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;

const int INF = numeric_limits<int>::max();

struct Node {
    int distance;
    int vertex;
    vector<int> path;

    bool operator>(const Node& other) const {
        return distance > other.distance;
    }
};

vector<int> shortestPath(int n, const vector<vector<int>>& distances, int start, int end) {
    priority_queue<Node, vector<Node>, greater<Node>> minHeap;
    minHeap.push({0, start, {}});

    while (!minHeap.empty()) {
        Node current = minHeap.top();
        minHeap.pop();

        if (current.vertex == end) {
            current.path.push_back(current.vertex);
            return current.path;
        }

        for (int neighbor = 0; neighbor < n; neighbor++) {
            if (distances[current.vertex][neighbor] != INF && neighbor != current.vertex) {
                vector<int> newPath = current.path;
                newPath.push_back(current.vertex);
                minHeap.push({current.distance + distances[current.vertex][neighbor], neighbor, newPath});
            }
        }
    }

    return {};
}

int main() {
    int n = 5;
    vector<vector<int>> distances = {
        {0, 3, 1, INF, INF},
        {3, 0, 7, 5, 1},
        {1, 7, 0, 2, 3},
        {INF, 5, 2, 0, 7},
        {INF, 1, 3, 7, 0}
    };

    int start = 0;
    int end = 4;

    vector<int> result = shortestPath(n, distances, start, end);
    for (int vertex : result) {
        cout << vertex << " ";
    }
    cout << endl;

    return 0;
}
