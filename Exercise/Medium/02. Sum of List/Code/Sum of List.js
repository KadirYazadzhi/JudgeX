function sumList(numbers) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }

    console.log(sum);
}

sumList([1, 2, 3, 4, 5]);
