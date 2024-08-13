#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> graph;
vector<bool> visited;
vector<bool> rec_stack;

bool dfs(int node) {
    visited[node] = true;
    rec_stack[node] = true;

    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            if (dfs(neighbor)) {
                return true;
            }
        } else if (rec_stack[neighbor]) {
            return true;
        }
    }

    rec_stack[node] = false;
    return false;
}

bool has_cycle(int n, const vector<pair<int, int>>& edges) {
    graph.assign(n, vector<int>());
    visited.assign(n, false);
    rec_stack.assign(n, false);

    for (const auto& edge : edges) {
        graph[edge.first].push_back(edge.second);
    }

    for (int node = 0; node < n; ++node) {
        if (!visited[node]) {
            if (dfs(node)) {
                return true;
            }
        }
    }

    return false;
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<pair<int, int>> edges(m);
    for (int i = 0; i < m; ++i) {
        cin >> edges[i].first >> edges[i].second;
    }

    if (has_cycle(n, edges)) {
        cout << "True" << endl;
    } 
    else {
        cout << "False" << endl;
    }

    return 0;
}
