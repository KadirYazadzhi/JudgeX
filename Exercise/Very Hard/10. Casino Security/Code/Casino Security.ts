function CasinoSecurity(s: string): string {
    let thiefPos = s.indexOf('T');
    let moneyPos = s.indexOf('$');
    let guardPos = s.indexOf('G');

    if (thiefPos === -1 || moneyPos === -1) {
        return "Safe";
    }

    if ((thiefPos < moneyPos && moneyPos < guardPos) ||
        (guardPos < moneyPos && moneyPos < thiefPos)) {
        return "Safe";
    }

    return "ALARM!";
}

let Input: string = "xxxxTTxGxx$xxTxxx";
let Result: string = casinoSecurity(Input);
console.log(Result);
