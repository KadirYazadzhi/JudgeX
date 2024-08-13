#include <stdio.h>
#include <limits.h>
#include <stdlib.h>

#define INF INT_MAX

typedef struct {
    int distance;
    int vertex;
    int* path;
    int path_len;
} MinHeapNode;

void swap(MinHeapNode* a, MinHeapNode* b) {
    MinHeapNode temp = *a;
    *a = *b;
    *b = temp;
}

void heapify(MinHeapNode heap[], int size, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < size && heap[left].distance < heap[smallest].distance)
        smallest = left;
    if (right < size && heap[right].distance < heap[smallest].distance)
        smallest = right;
    if (smallest != i) {
        swap(&heap[i], &heap[smallest]);
        heapify(heap, size, smallest);
    }
}

MinHeapNode extractMin(MinHeapNode heap[], int* size) {
    MinHeapNode root = heap[0];
    heap[0] = heap[--(*size)];
    heapify(heap, *size, 0);
    return root;
}

void insertHeap(MinHeapNode heap[], int* size, MinHeapNode node) {
    heap[(*size)++] = node;
    for (int i = (*size) / 2 - 1; i >= 0; i--)
        heapify(heap, *size, i);
}

void shortestPath(int n, int distances[n][n], int start, int end, int* path, int* path_len) {
    MinHeapNode minHeap[n * n];
    int heap_size = 0;

    MinHeapNode initial = {0, start, NULL, 0};
    insertHeap(minHeap, &heap_size, initial);

    while (heap_size > 0) {
        MinHeapNode minNode = extractMin(minHeap, &heap_size);
        int dist = minNode.distance;
        int current = minNode.vertex;

        if (current == end) {
            for (int i = 0; i < minNode.path_len; i++) {
                path[i] = minNode.path[i];
            }
            path[minNode.path_len] = current;
            *path_len = minNode.path_len + 1;
            free(minNode.path);
            break;
        }

        for (int neighbor = 0; neighbor < n; neighbor++) {
            if (distances[current][neighbor] != INF && neighbor != current) {
                int new_dist = dist + distances[current][neighbor];
                int* new_path = malloc((minNode.path_len + 1) * sizeof(int));
                for (int i = 0; i < minNode.path_len; i++) {
                    new_path[i] = minNode.path[i];
                }
                new_path[minNode.path_len] = current;
                MinHeapNode newNode = {new_dist, neighbor, new_path, minNode.path_len + 1};
                insertHeap(minHeap, &heap_size, newNode);
            }
        }
        free(minNode.path);
    }
}

int main() {
    int n = 5;
    int distances[5][5] = {
        {0, 3, 1, INF, INF},
        {3, 0, 7, 5, 1},
        {1, 7, 0, 2, 3},
        {INF, 5, 2, 0, 7},
        {INF, 1, 3, 7, 0}
    };

    int start = 0;
    int end = 4;

    int path[5];
    int path_len = 0;
    shortestPath(n, distances, start, end, path, &path_len);

    for (int i = 0; i < path_len; i++) {
        printf("%d ", path[i]);
    }
    printf("\n");

    return 0;
}

