#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_NODES 1000

int graph[MAX_NODES][MAX_NODES];
bool visited[MAX_NODES];
bool rec_stack[MAX_NODES];

bool dfs(int node, int n) {
    visited[node] = true;
    rec_stack[node] = true;

    for (int neighbor = 0; neighbor < n; ++neighbor) {
        if (graph[node][neighbor]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor, n)) {
                    return true;
                }
            } else if (rec_stack[neighbor]) {
                return true;
            }
        }
    }

    rec_stack[node] = false;
    return false;
}

bool has_cycle(int n, int edges[][2], int m) {
    for (int i = 0; i < n; ++i) {
        visited[i] = false;
        rec_stack[i] = false;
    }

    for (int i = 0; i < m; ++i) {
        graph[edges[i][0]][edges[i][1]] = 1;
    }

    for (int node = 0; node < n; ++node) {
        if (!visited[node]) {
            if (dfs(node, n)) {
                return true;
            }
        }
    }

    return false;
}

int main() {
    int n, m;
    scanf("%d %d", &n, &m);
    int edges[m][2];
    for (int i = 0; i < m; ++i) {
        scanf("%d %d", &edges[i][0], &edges[i][1]);
    }

    if (has_cycle(n, edges, m)) {
        printf("True\n");
    } else {
        printf("False\n");
    }

    return 0;
}

