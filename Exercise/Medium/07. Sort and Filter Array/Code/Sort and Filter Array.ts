function SortAndFilter(arr: number[]): number[] {
    let count5 = 0, count6 = 0, count7 = 0;
    for (let num of arr) {
        if (num == 5) count5++;
        else if (num == 6) count6++;
        else if (num == 7) count7++;
    }

    let result: number[] = [];
    for (let i = 0; i < count5; i++) result.push(5);
    for (let i = 0; i < count6; i++) result.push(6);
    for (let i = 0; i < count7; i++) result.push(7);

    return result;
}

const input1 = "5 6 7 5 6 7 5 5 6 7";
const arr1 = input1.split(' ').map(Number).filter(num => num >= 5 && num <= 7);
console.log(SortAndFilter(arr1).join(' ')); 
