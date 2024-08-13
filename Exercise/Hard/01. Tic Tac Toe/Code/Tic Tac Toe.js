function checkWinner(board) {
    for (let i = 0; i < 3; ++i) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '#') {
            return board[i][0];
        }
    }
    
    for (let i = 0; i < 3; ++i) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '#') {
            return board[0][i];
        }
    }
    
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '#') {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '#') {
        return board[0][2];
    }
    
    return '#'; 
}

function printBoard(board) {
    for (let i = 0; i < 3; ++i) {
        console.log(board[i].join(' '));
    }
}

function ticTacToe() {
    const board = [
        ['X', 'O', 'O'],
        ['O', '#', 'X'],
        ['X', '#', 'O']
    ];

    printBoard(board);

    const winner = checkWinner(board);

    if (winner === 'X') {
        console.log("Player 1 wins");
    } 
    else if (winner === 'O') {
        console.log("Player 2 wins");
    } 
    else {
        console.log("It's a Tie");
    }
}

ticTacToe();

