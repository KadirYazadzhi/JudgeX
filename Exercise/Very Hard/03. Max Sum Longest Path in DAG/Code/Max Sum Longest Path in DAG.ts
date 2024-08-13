type Edge = {
    v: number;
    w: number;
};

function FindLongestPath(n: number, edges: [number, number, number][], start: number): { path: number[], maxSum: number } {
    const graph: Edge[][] = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        graph[u].push({ v, w });
    }

    const distance: number[] = Array(n).fill(-Infinity);
    distance[start] = 0;
    const topoOrder: number[] = [];
    const indegree: number[] = Array(n).fill(0);

    for (let u = 0; u < n; u++) {
        for (const { v } of graph[u]) {
            indegree[v]++;
        }
    }

    const zeroIndegree: number[] = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            zeroIndegree.push(i);
        }
    }

    while (zeroIndegree.length > 0) {
        const node = zeroIndegree.shift()!;
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
    const path: number[] = [];

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

// Example usage
const N = 5;
const Edges: [number, number, number][] = [
    [0, 1, 5],
    [0, 2, 3],
    [1, 3, 6],
    [1, 2, 2],
    [2, 4, 4],
    [3, 4, -1],
];
const Start = 0;

const Result = FindLongestPath(N, Edges, Start);
console.log("Path:", Result.path);
console.log("Sum:", Result.maxSum);
