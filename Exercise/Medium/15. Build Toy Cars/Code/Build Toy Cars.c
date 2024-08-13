#include <stdio.h>

int main() {
    int tires, bodies, figures;
    
    scanf("%d, %d, %d", &tires, &bodies, &figures);

    int cars_by_tires = tires / 4;
    int cars_by_bodies = bodies;
    int cars_by_figures = figures / 2;
    int complete_cars = cars_by_tires;
    if (cars_by_bodies < complete_cars) {
        complete_cars = cars_by_bodies;
    }
    if (cars_by_figures < complete_cars) {
        complete_cars = cars_by_figures;
    }

    printf("%d\n", complete_cars);

    return 0;
}

