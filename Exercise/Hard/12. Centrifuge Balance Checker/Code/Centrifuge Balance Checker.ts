function CFuge(n: number, k: number): boolean {
    if (n === 1 || k === 1) {
        return false;
    }
    if (n % 2 !== 0) {
        return n === k;
    }
    return (n - k) % 2 === 0;
}

function Main() {
    const input: string = "5,3"; 
    const parts: string[] = input.split(',');

    if (parts.length === 2) {
        const n: number = parseInt(parts[0], 10);
        const k: number = parseInt(parts[1], 10);

        if (CFuge(n, k)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

Main();

