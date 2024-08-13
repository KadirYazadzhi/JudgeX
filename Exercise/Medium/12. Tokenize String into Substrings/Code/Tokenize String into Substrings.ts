function TokenizeString(input: string, delimiter: string): void {
    const tokens = input.split(delimiter);
    tokens.forEach(token => console.log(token));
}

tokenizeString("Welcome to JudgeX platform", ' ');


