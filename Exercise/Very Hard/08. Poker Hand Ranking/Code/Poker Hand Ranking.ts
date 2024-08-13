function GetFace(c: string): number {
    if (c.length === 2) {
        if (c[0] >= '2' && c[0] <= '9')
            return parseInt(c[0]);
        else if (c[0] === 'J')
            return 11;
        else if (c[0] === 'Q')
            return 12;
        else if (c[0] === 'K')
            return 13;
        else if (c[0] === 'A')
            return 1;
    } else {
        return 10;
    }
    return 0;
}

function GetSuit(c: string): number {
    switch (c[c.length - 1]) {
        case 'h':
            return 3;
        case 'd':
            return 2;
        case 's':
            return 1;
        case 'c':
            return 0;
    }
    return 0;
}

function PokerHandRanking(hand: string[]): string {
    const face_count: number[] = new Array(14).fill(0);
    const suit_count: number[] = new Array(4).fill(0);

    hand.forEach(card => {
        const tface = GetFace(card);
        const tsuit = GetSuit(card);

        face_count[tface]++;
        suit_count[tsuit]++;
    });

    return "";
}

const Hand: string[] = ["10h", "Jc", "Qs", "Kd", "Ah"]; 

const Result: string = PokerHandRanking(Hand);
console.log(Result);
