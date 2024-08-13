function fullMatrix(n, arr) {
    let num = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = num++;
        }
    }
}

function printMatrix(n, arr) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += arr[i][j] + " ";
        }
        console.log(row);
    }
}

function main(n) {
    let arr = new Array(n).fill().map(() => new Array(n).fill(0));

    fullMatrix(n, arr);
    printMatrix(n, arr);
}

main(5);

