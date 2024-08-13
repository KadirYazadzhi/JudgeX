#include <stdio.h>
#include <string.h>

int get_face(char c[]) {
    if (strlen(c) == 2) {
        if (c[0] >= '2' && c[0] <= '9')
            return c[0] - '0';
        else if (c[0] == 'J')
            return 11;
        else if (c[0] == 'Q')
            return 12;
        else if (c[0] == 'K')
            return 13;
        else if (c[0] == 'A')
            return 1;
    } else
        return 10;
    return 0;
}

int get_suit(char c[]) {
    switch (c[strlen(c)-1]) {
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

char* pokerHandRanking(char hand[][3], int numCards) {
    int face_count[14];
    int suit_count[4];

    memset(face_count, 0, sizeof(face_count));
    memset(suit_count, 0, sizeof(suit_count));

    for (int i=0; i<numCards; i++) {
        int tface = get_face(hand[i]);
        int tsuit = get_suit(hand[i]);

        face_count[tface]++;
        suit_count[tsuit]++;
    }

    return ""; 
}

int main() {
    char hand[5][3];
    char card[3];

    for (int i = 0; i < 5; ++i) {
        scanf("%s", card);
        strcpy(hand[i], card);
    }

    char* result = pokerHandRanking(hand, 5);
    printf("%s\n", result);

    return 0;
}

