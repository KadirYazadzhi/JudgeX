def can_move(piece, current_position, target_position):
    x1, y1 = ord(current_position[0].upper()) - ord('A'), int(current_position[1]) - 1
    x2, y2 = ord(target_position[0].upper()) - ord('A'), int(target_position[1]) - 1

    if piece == "Pawn":
        return x1 == x2 and (y2 == y1 + 1 or (y1 == 1 and y2 == 3))
    elif piece == "Knight":
        return (abs(x1 - x2) == 2 and abs(y1 - y2) == 1) or (abs(x1 - x2) == 1 and abs(y1 - y2) == 2)
    elif piece == "Bishop":
        return abs(x1 - x2) == abs(y1 - y2)
    elif piece == "Rook":
        return x1 == x2 or y1 == y2
    elif piece == "Queen":
        return x1 == x2 or y1 == y2 or abs(x1 - x2) == abs(y1 - y2)
    elif piece == "King":
        return abs(x1 - x2) <= 1 and abs(y1 - y2) <= 1

    return False

piece = input()
current_position = input()
target_position = input()

print(can_move(piece, current_position, target_position))
