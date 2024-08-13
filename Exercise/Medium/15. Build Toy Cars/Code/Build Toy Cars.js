function calculateCars(tires, bodies, figures) {
    let carsByTires = Math.floor(tires / 4);
    let carsByBodies = bodies;
    let carsByFigures = Math.floor(figures / 2);

    let completeCars = Math.min(carsByTires, carsByBodies, carsByFigures);

    return completeCars;
}

const input = "43, 15, 87";
const [tires, bodies, figures] = input.split(',').map(item => parseInt(item.trim()));

console.log(calculateCars(tires, bodies, figures));
