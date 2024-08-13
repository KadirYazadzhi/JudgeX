def get_face(c):
    if len(c) == 2:
        if '2' <= c[0] <= '9':
            return int(c[0])
        elif c[0] == 'J':
            return 11
        elif c[0] == 'Q':
            return 12
        elif c[0] == 'K':
            return 13
        elif c[0] == 'A':
            return 1
    else:
        return 10
    return 0

def get_suit(c):
    if c[-1] == 'h':
        return 3
    elif c[-1] == 'd':
        return 2
    elif c[-1] == 's':
        return 1
    elif c[-1] == 'c':
        return 0
    return 0

def poker_hand_ranking(hand):
    face_count = [0] * 14
    suit_count = [0] * 4

    for card in hand:
        tface = get_face(card)
        tsuit = get_suit(card)

        face_count[tface] += 1
        suit_count[tsuit] += 1

    return ""

if __name__ == "__main__":
    hand = []
    for i in range(5):
        card = input().strip()
        hand.append(card)

    result = poker_hand_ranking(hand)
    print(result)
