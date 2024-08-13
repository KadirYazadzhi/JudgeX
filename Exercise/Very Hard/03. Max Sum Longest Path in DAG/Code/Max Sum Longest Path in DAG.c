#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <stdbool.h>

#define NEG_INF INT_MIN

typedef struct {
    int v, w;
} Edge;

typedef struct {
    Edge* edges;
    int size, capacity;
} Graph;

void initGraph(Graph* graph, int n) {
    graph->edges = malloc(n * sizeof(Edge));
    graph->size = 0;
    graph->capacity = n;
}

void addEdge(Graph* graph, int u, int v, int w) {
    if (graph->size == graph->capacity) {
        graph->capacity *= 2;
        graph->edges = realloc(graph->edges, graph->capacity * sizeof(Edge));
    }
    graph->edges[graph->size].v = v;
    graph->edges[graph->size].w = w;
    graph->size++;
}

void freeGraph(Graph* graph) {
    free(graph->edges);
}

void findLongestPath(int n, Graph* graph, int start, int* path, int* path_len, int* max_sum) {
    int* distance = malloc(n * sizeof(int));
    int* topo_order = malloc(n * sizeof(int));
    int* indegree = calloc(n, sizeof(int));
    int* stack = malloc(n * sizeof(int));
    int stack_size = 0;

    for (int i = 0; i < n; i++) {
        distance[i] = NEG_INF;
    }
    distance[start] = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < graph[i].size; j++) {
            indegree[graph[i].edges[j].v]++;
        }
    }

    for (int i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            stack[stack_size++] = i;
        }
    }

    int topo_size = 0;
    while (stack_size > 0) {
        int node = stack[--stack_size];
        topo_order[topo_size++] = node;
        for (int i = 0; i < graph[node].size; i++) {
            int neighbor = graph[node].edges[i].v;
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) {
                stack[stack_size++] = neighbor;
            }
        }
    }

    for (int i = 0; i < topo_size; i++) {
        int node = topo_order[i];
        if (distance[node] != NEG_INF) {
            for (int j = 0; j < graph[node].size; j++) {
                int neighbor = graph[node].edges[j].v;
                int weight = graph[node].edges[j].w;
                if (distance[neighbor] < distance[node] + weight) {
                    distance[neighbor] = distance[node] + weight;
                }
            }
        }
    }

    int end_node = 0;
    for (int i = 1; i < n; i++) {
        if (distance[i] > distance[end_node]) {
            end_node = i;
        }
    }

    *max_sum = distance[end_node];
    *path_len = 0;
    int current_node = end_node;

    while (current_node != start) {
        path[(*path_len)++] = current_node;
        for (int i = 0; i < graph[current_node].size; i++) {
            int neighbor = graph[current_node].edges[i].v;
            int weight = graph[current_node].edges[i].w;
            if (distance[current_node] == distance[neighbor] + weight) {
                current_node = neighbor;
                break;
            }
        }
    }
    path[(*path_len)++] = start;

    for (int i = 0; i < (*path_len) / 2; i++) {
        int temp = path[i];
        path[i] = path[*path_len - 1 - i];
        path[*path_len - 1 - i] = temp;
    }

    free(distance);
    free(topo_order);
    free(indegree);
    free(stack);
}

int main() {
    int n = 5;
    Graph* graph = malloc(n * sizeof(Graph));
    for (int i = 0; i < n; i++) {
        initGraph(&graph[i], n);
    }

    addEdge(&graph[0], 1, 5);
    addEdge(&graph[0], 2, 3);
    addEdge(&graph[1], 3, 6);
    addEdge(&graph[1], 2, 2);
    addEdge(&graph[2], 4, 4);
    addEdge(&graph[3], 4, -1);

    int start = 0;
    int path[5];
    int path_len = 0;
    int max_sum = 0;

    findLongestPath(n, graph, start, path, &path_len, &max_sum);

    for (int i = 0; i < path_len; i++) {
        printf("%d ", path[i]);
    }
    printf("\nSum: %d\n", max_sum);

    for (int i = 0; i < n; i++) {
        freeGraph(&graph[i]);
    }
    free(graph);

    return 0;
}

