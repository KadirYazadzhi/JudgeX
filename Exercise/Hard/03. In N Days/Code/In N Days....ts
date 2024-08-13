function CalculateDay(startDay: string, N: number): string {
    const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const startIdx: number = days.indexOf(startDay);

    if (startIdx === -1) {
        return "Invalid day";
    }

    const endIdx: number = (startIdx + N) % 7;
    return days[endIdx];
}
console.log(CalculateDay("Friday", 4));


