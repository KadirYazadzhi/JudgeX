def check_winner(board):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] and board[i][0] != '#':
            return board[i][0]
    
    for i in range(3):
        if board[0][i] == board[1][i] == board[2][i] and board[0][i] != '#':
            return board[0][i]
    
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != '#':
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != '#':
        return board[0][2]
    
    return '#'  

def print_board(board):
    for row in board:
        print(' '.join(row))

def tic_tac_toe(board):
    winner = check_winner(board)
    
    if winner == 'X':
        print("Player 1 wins")
    elif winner == 'O':
        print("Player 2 wins")
    else:
        print("It's a Tie")


def main():
    board = [['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']]

    for i in range(3):
        row = input().split()
        for j in range(3):
            board[i][j] = row[j]

    print_board(board)
    
    tic_tac_toe(board)

if __name__ == "__main__":
    main()
