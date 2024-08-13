function findInconsistentBox() {
    for (let i = 1; i <= 1000; ++i) {
        let stones = 0; 
        for (let j = 1; j <= 1000; ++j) {
            if (i === j) {
                stones += i;  
            }
        }
        if (stones !== i) {
            return i;  
        }
    }
    return -1;  
}

let inconsistentBox = findInconsistentBox();
console.log(inconsistentBox);

