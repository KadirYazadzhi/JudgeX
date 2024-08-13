function SumList(numbers) {

    let sum :number = 0;
    for (let i :number = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }

    console.log(sum);
}

SumList([1, 2, 3, 4, 5]);