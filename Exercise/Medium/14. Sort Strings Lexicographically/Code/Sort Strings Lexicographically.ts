function SortWords(input: string): string {
    let words = input.split(' ');
    words.sort();
    return words.join(', ');
}
console.log(SortWords("apple orange banana grape kiwi"));


