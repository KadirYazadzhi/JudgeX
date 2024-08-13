function findMissingNumber(arr) {
    const expectedSum = (arr[0] + arr[arr.length - 1]) * (arr.length + 1) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5]));
