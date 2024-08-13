function canMove(piece, currentPosition, targetPosition) {
    const x1 = currentPosition[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
    const y1 = parseInt(currentPosition[1], 10) - 1;
    const x2 = targetPosition[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
    const y2 = parseInt(targetPosition[1], 10) - 1;

    switch (piece) {
        case 'Pawn':
            return x1 === x2 && (y2 === y1 + 1 || (y1 === 1 && y2 === 3));
        case 'Knight':
            return (Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1) || (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2);
        case 'Bishop':
            return Math.abs(x1 - x2) === Math.abs(y1 - y2);
        case 'Rook':
            return x1 === x2 || y1 === y2;
        case 'Queen':
            return x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2);
        case 'King':
            return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
        default:
            return false;
    }
}

console.log(canMove('Rook', 'A8', 'H8')); 
console.log(canMove('Queen', 'C4', 'D6')); 
