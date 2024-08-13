def calculate_day(start_day, N):
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    start_idx = days.index(start_day)

    end_idx = (start_idx + N) % 7
    return days[end_idx]

def main():
    start_day = input().strip()
    N = int(input())

    result = calculate_day(start_day, N)
    print(result)

if __name__ == "__main__":
    main()
