import heapq


def shortest_path(n, distances, start, end):
    shortest_path = []
    min_heap = [(0, start, [])]

    while min_heap:
        dist, current, path = heapq.heappop(min_heap)

        if current == end:
            shortest_path = path + [current]
            break

        for neighbor in range(n):
            if distances[current][neighbor] != float('inf') and neighbor != current:
                heapq.heappush(min_heap, (dist + distances[current][neighbor], neighbor, path + [current]))

    return shortest_path


def main():
    n = int(input())
    distances = []
    for _ in range(n):
        row = list(map(int, input().split()))
        distances.append(row)

    start, end = map(int, input().split())

    result = shortest_path(n, distances, start, end)
    print(*result)


if __name__ == "__main__":
    main()
