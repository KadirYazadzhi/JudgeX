function shortestPath(n, distances, start, end) {
    const minHeap = [[0, start, []]];
    let shortestPath = [];

    while (minHeap.length > 0) {
        const [dist, current, path] = minHeap.shift();
        if (current === end) {
            shortestPath = [...path, current];
            break;
        }

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (distances[current][neighbor] !== Infinity && neighbor !== current) {
                minHeap.push([dist + distances[current][neighbor], neighbor, [...path, current]]);
                minHeap.sort((a, b) => a[0] - b[0]); 
            }
        }
    }

    return shortestPath;
}

function main() {
    const n = 5; 
    const distances = [
        [0, 3, 1, Infinity, Infinity],
        [3, 0, 7, 5, 1],
        [1, 7, 0, 2, 3],
        [Infinity, 5, 2, 0, 7],
        [Infinity, 1, 3, 7, 0]
    ]; 

    const start = 0;
    const end = 4;

    const result = shortestPath(n, distances, start, end);
    console.log(result);
}

main();

