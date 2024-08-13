function ShortestPath(n: number, distances: number[][], start: number, end: number): number[] {
    const minHeap: [number, number, number[]][] = [[0, start, []]];
    let shortestPath: number[] = [];

    while (minHeap.length > 0) {
        const [dist, current, path] = minHeap.shift()!;
        if (current === end) {
            shortestPath = [...path, current];
            break;
        }

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (distances[current][neighbor] !== Infinity && neighbor !== current) {
                minHeap.push([dist + distances[current][neighbor], neighbor, [...path, current]]);
                minHeap.sort((a, b) => a[0] - b[0]); // Maintain heap property
            }
        }
    }

    return shortestPath;
}

function mainT() {
    const n = 5;
    const distances: number[][] = [
        [0, 3, 1, Infinity, Infinity],
        [3, 0, 7, 5, 1],
        [1, 7, 0, 2, 3],
        [Infinity, 5, 2, 0, 7],
        [Infinity, 1, 3, 7, 0]
    ]; 

    const start = 0;
    const end = 4;

    const result = ShortestPath(n, distances, start, end);
    console.log(result);
}

mainT();
