#include <iostream>

using namespace std;

int main() {
    int tires, bodies, figures;
    cin >> tires >> bodies >> figures;

    int cars_by_tires = tires / 4;
    int cars_by_bodies = bodies;
    int cars_by_figures = figures / 2;

    int complete_cars = min({cars_by_tires, cars_by_bodies, cars_by_figures});

    cout << complete_cars << endl;

    return 0;
}
