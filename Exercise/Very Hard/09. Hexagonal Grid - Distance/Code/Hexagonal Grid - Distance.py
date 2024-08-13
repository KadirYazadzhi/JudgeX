import heapq


def constrained_shortest_path(N, M, K, prices, edges, S, T):
    # Convert S and T to 0-based indexing
    S -= 1
    T -= 1

    # Initialize adjacency list
    graph = [[] for _ in range(N)]
    for u, v, w in edges:
        u -= 1
        v -= 1
        graph[u].append((v, w))

    # Dijkstra's algorithm with constraints
    def dijkstra():
        # Priority queue: (current_cost, current_vertex)
        pq = [(prices[S], S)]
        # Distance array
        dist = [float('inf')] * N
        dist[S] = 0

        while pq:
            current_cost, u = heapq.heappop(pq)

            # If we reached the target
            if u == T:
                return current_cost

            if current_cost > dist[u]:
                continue

            for v, weight in graph[u]:
                new_cost = dist[u] + weight
                if new_cost < dist[v] and prices[v] <= K:
                    dist[v] = new_cost
                    heapq.heappush(pq, (new_cost + prices[v], v))

        return -1

    result = dijkstra()
    return result


# Read input from console
def read_input():
    N, M, K = map(int, input().split())
    prices = list(map(int, input().split()))
    edges = [tuple(map(int, input().split())) for _ in range(M)]
    S, T = map(int, input().split())
    return N, M, K, prices, edges, S, T


# Main function
if __name__ == "__main__":
    N, M, K, prices, edges, S, T = read_input()
    result = constrained_shortest_path(N, M, K, prices, edges, S, T)
    print(result)
