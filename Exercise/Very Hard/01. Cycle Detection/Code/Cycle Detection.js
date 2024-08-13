function hasCycle(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
    }

    const visited = Array(n).fill(false);
    const recStack = Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;
        recStack[node] = true;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) {
                    return true;
                }
            } else if (recStack[neighbor]) {
                return true;
            }
        }

        recStack[node] = false;
        return false;
    }

    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            if (dfs(node)) {
                return true;
            }
        }
    }

    return false;
}

function main() {
    const n = 4; 
    const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 1]
    ]; 

    if (hasCycle(n, edges)) {
        console.log("True");
    } else {
        console.log("False");
    }
}

main();

