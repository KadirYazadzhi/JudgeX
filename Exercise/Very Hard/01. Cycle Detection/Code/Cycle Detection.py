def has_cycle(n, edges):
    from collections import defaultdict

    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)

    visited = [False] * n
    rec_stack = [False] * n

    def dfs(node):
        visited[node] = True
        rec_stack[node] = True

        for neighbor in graph[node]:
            if not visited[neighbor]:
                if dfs(neighbor):
                    return True
            elif rec_stack[neighbor]:
                return True

        rec_stack[node] = False
        return False

    for node in range(n):
        if not visited[node]:
            if dfs(node):
                return True

    return False

def main():
    n = int(input().strip())
    m = int(input().strip())
    edges = [tuple(map(int, input().strip().split())) for _ in range(m)]

    if has_cycle(n, edges):
        print("True")
    else:
        print("False")

if __name__ == "__main__":
    main()
