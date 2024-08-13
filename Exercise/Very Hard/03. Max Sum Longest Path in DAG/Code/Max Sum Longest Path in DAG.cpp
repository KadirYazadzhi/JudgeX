#include <iostream>
#include <vector>
#include <queue>
#include <limits>
#include <stack>
using namespace std;

const int NEG_INF = numeric_limits<int>::min();

struct Edge {
    int v, w;
};

void findLongestPath(int n, vector<vector<Edge>>& graph, int start, vector<int>& path, int& max_sum) {
    vector<int> distance(n, NEG_INF);
    vector<int> topo_order;
    vector<int> indegree(n, 0);

    distance[start] = 0;

    for (int u = 0; u < n; ++u) {
        for (auto& edge : graph[u]) {
            indegree[edge.v]++;
        }
    }

    stack<int> zero_indegree;
    for (int i = 0; i < n; ++i) {
        if (indegree[i] == 0) {
            zero_indegree.push(i);
        }
    }

    while (!zero_indegree.empty()) {
        int node = zero_indegree.top();
        zero_indegree.pop();
        topo_order.push_back(node);
        for (auto& edge : graph[node]) {
            indegree[edge.v]--;
            if (indegree[edge.v] == 0) {
                zero_indegree.push(edge.v);
            }
        }
    }

    for (int node : topo_order) {
        if (distance[node] != NEG_INF) {
            for (auto& edge : graph[node]) {
                if (distance[edge.v] < distance[node] + edge.w) {
                    distance[edge.v] = distance[node] + edge.w;
                }
            }
        }
    }

    int end_node = max_element(distance.begin(), distance.end()) - distance.begin();
    max_sum = distance[end_node];

    int current_node = end_node;
    while (current_node != start) {
        path.push_back(current_node);
        for (auto& edge : graph[current_node]) {
            if (distance[current_node] == distance[edge.v] + edge.w) {
                current_node = edge.v;
                break;
            }
        }
    }
    path.push_back(start);
    reverse(path.begin(), path.end());
}

int main() {
    int n = 5;
    vector<vector<Edge>> graph(n);

    graph[0].push_back({1, 5});
    graph[0].push_back({2, 3});
    graph[1].push_back({3, 6});
    graph[1].push_back({2, 2});
    graph[2].push_back({4, 4});
    graph[3].push_back({4, -1});

    int start = 0;
    vector<int> path;
    int max_sum = 0;

    findLongestPath(n, graph, start, path, max_sum);

    for (int node : path) {
        cout << node << " ";
    }
    cout << "\nSum: " << max_sum << endl;

    return 0;
}
