function cFuge(n, k) {
    if (n == 1 || k == 1) {
        return false;
    }
    if (n % 2 != 0) {
        return n === k;
    }
    return (n - k) % 2 === 0;
}

function main() {
    const input = "5,3";
    const parts = input.split(',');

    if (parts.length === 2) {
        const n = parseInt(parts[0], 10);
        const k = parseInt(parts[1], 10);

        if (cFuge(n, k)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

main();
