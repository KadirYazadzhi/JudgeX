function Space(s: string): string {
    let d1 = s.indexOf("[");
    let d2 = d1;
    for (let i = d1 + 1; i < s.length; i++) {
        if (s[i] === '[') d1 = i;
        if (s[i] === ']') {
            d2 = i;
            break;
        }
    }
    if (d1 === -1 || d2 === -1) {
        return s;
    }

    let d = parseInt(s.substring(d1 + 1, d1 + 2));
    let rep = "";
    let sub = s.substring(d1 + 2, d2);
    for (let i = 0; i < d; i++) {
        rep += sub;
    }

    return s.substring(0, d1) + rep + s.substring(d2 + 1);
}

function SpaceMessage(s: string): string {
    while (s.includes("[")) {
        s = Space(s);
    }
    return s;
}

function Main() {
    let s: string = "AC[2BG]OP[1VG]OO[3PP]O";
    console.log(SpaceMessage(s));
}

Main();
