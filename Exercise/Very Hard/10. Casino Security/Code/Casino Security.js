function casinoSecurity(s) {
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
let input = "xxxxTTxGxx$xxTxxx";

let result = casinoSecurity(input);
console.log(result);

