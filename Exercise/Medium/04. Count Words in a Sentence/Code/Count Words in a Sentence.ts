function CountWords(line: string): number {
    let words: string[] = line.trim().split(/\s+/);
    return words.length;
}

console.log(CountWords("Hello world"));
