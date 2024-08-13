from collections import defaultdict, deque


def find_longest_path(n, edges, start):
    graph = defaultdict(list)
    for u, v, w in edges:
        graph[u].append((v, w))

    distance = [-float('inf')] * n
    distance[start] = 0
    topo_order = []
    indegree = [0] * n

    for u in range(n):
        for v, w in graph[u]:
            indegree[v] += 1

    zero_indegree = deque([i for i in range(n) if indegree[i] == 0])
    while zero_indegree:
        node = zero_indegree.popleft()
        topo_order.append(node)
        for neighbor, weight in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                zero_indegree.append(neighbor)

    for node in topo_order:
        if distance[node] != -float('inf'):
            for neighbor, weight in graph[node]:
                if distance[neighbor] < distance[node] + weight:
                    distance[neighbor] = distance[node] + weight

    end_node = distance.index(max(distance))
    path = []
    current_node = end_node

    while current_node != start:
        path.append(current_node)
        for neighbor, weight in graph[current_node]:
            if distance[current_node] == distance[neighbor] + weight:
                current_node = neighbor
                break
    path.append(start)
    path.reverse()

    return path, distance[end_node]


def main():
    import sys
    input = sys.stdin.read
    data = input().split()

    n = int(data[0])
    edges = []
    index = 1
    for i in range(n):
        u = int(data[index]) - 1
        index += 1
        while index < len(data) and data[index] != '-1':
            v = int(data[index]) - 1
            index += 1
            w = int(data[index])
            index += 1
            edges.append((u, v, w))
        index += 1

    start = int(data[index]) - 1

    path, max_sum = find_longest_path(n, edges, start)
    print(" -> ".join(map(str, [x + 1 for x in path])))
    print("Sum:", max_sum)


if __name__ == "__main__":
    main()
