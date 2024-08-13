function countWords(line) {
    let words = line.trim().split(/\s+/);
    return words.length;
}

let line = ("Hello world");
console.log(countWords(line));
