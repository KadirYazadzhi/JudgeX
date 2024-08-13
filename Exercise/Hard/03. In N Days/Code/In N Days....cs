using System;

class Program {
    static void Main() {
        string startDay = Console.ReadLine();

        int N = int.Parse(Console.ReadLine());

        string result = CalculateDay(startDay, N);
        Console.WriteLine(result);
    }

    static string CalculateDay(string startDay, int N) {
        string[] days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
        int startIdx = Array.IndexOf(days, startDay);

        int endIdx = (startIdx + N) % 7;
        return days[endIdx];
    }
}

