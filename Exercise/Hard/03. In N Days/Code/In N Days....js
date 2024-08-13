function calculateDay(startDay, N) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const startIdx = days.indexOf(startDay);

    const endIdx = (startIdx + N) % 7;
    return days[endIdx];
}

let startDay = "Monday";
let N = 4;
let result = calculateDay(startDay, N);
console.log(result);
