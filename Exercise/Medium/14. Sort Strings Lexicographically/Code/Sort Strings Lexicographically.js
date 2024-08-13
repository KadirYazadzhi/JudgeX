function sortWords(input) {
    let words = input.split(' ');
    words.sort();
    return words.join(', ');
}

const input = "apple orange banana grape kiwi";
console.log(sortWords(input));

