function CalculateCars(tires: number, bodies: number, figures: number): number {
    let carsByTires = Math.floor(tires / 4);
    let carsByBodies = bodies;
    let carsByFigures = Math.floor(figures / 2);

    let completeCars = Math.min(carsByTires, carsByBodies, carsByFigures);

    return completeCars;
}

const Input: string = "43, 15, 87";
const [Tires, Bodies, Figures] = Input.split(',').map(item => parseInt(item.trim(), 10));

console.log(CalculateCars(Tires, Bodies, Figures));


