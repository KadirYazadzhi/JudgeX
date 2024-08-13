function FullMatrix(n: number, arr: number[][]) {
    let num = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = num++;
        }
    }
}

function PrintMatrix(n: number, arr: number[][]) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += arr[i][j] + " ";
        }
        console.log(row);
    }
}

function Main(n :number) {
    let arr: number[][] = new Array(n).fill([]).map(() => new Array(n).fill(0));

    FullMatrix(n, arr);
    PrintMatrix(n, arr);
    
}

Main(5);

