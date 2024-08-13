import sys

def main():
    tires, bodies, figures = map(int, sys.stdin.readline().split())

    cars_by_tires = tires // 4
    cars_by_bodies = bodies
    cars_by_figures = figures // 2

    complete_cars = min(cars_by_tires, cars_by_bodies, cars_by_figures)

    print(complete_cars)

if __name__ == "__main__":
    main()