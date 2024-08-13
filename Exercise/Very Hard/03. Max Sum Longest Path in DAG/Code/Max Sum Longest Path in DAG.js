function findLongestPath(n, edges, start) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        graph[u].push({ v, w });
    }

    const distance = Array(n).fill(-Infinity);
    distance[start] = 0;
    const topoOrder = [];
    const indegree = Array(n).fill(0);

    for (let u = 0; u < n; u++) {
        for (const { v } of graph[u]) {
            indegree[v]++;
        }
    }

    const zeroIndegree = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            zeroIndegree.push(i);
        }
    }

    while (zeroIndegree.length > 0) {
        const node = zeroIndegree.shift();
        topoOrder.push(node);
        for (const { v } of graph[node]) {
            indegree[v]--;
            if (indegree[v] === 0) {
                zeroIndegree.push(v);
            }
        }
    }

    for (const node of topoOrder) {
        if (distance[node] !== -Infinity) {
            for (const { v, w } of graph[node]) {
                if (distance[v] < distance[node] + w) {
                    distance[v] = distance[node] + w;
                }
            }
        }
    }

    const endNode = distance.indexOf(Math.max(...distance));
    let currentNode = endNode;
    const path = [];

    while (currentNode !== start) {
        path.push(currentNode);
        for (const { v, w } of graph[currentNode]) {
            if (distance[currentNode] === distance[v] + w) {
                currentNode = v;
                break;
            }
        }
    }
    path.push(start);
    path.reverse();

    return { path, maxSum: distance[endNode] };
}

const n = 5;
const edges = [
    [0, 1, 5],
    [0, 2, 3],
    [1, 3, 6],
    [1, 2, 2],
    [2, 4, 4],
    [3, 4, -1],
];
const start = 0;

const result = findLongestPath(n, edges, start);
console.log("Path:", result.path);
console.log("Sum:", result.maxSum);

