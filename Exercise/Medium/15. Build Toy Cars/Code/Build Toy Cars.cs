using System;

class Program {
    static void Main() {
        string input = Console.ReadLine();
        
        string[] parts = input.Split(',');
        int tires = int.Parse(parts[0]);
        int bodies = int.Parse(parts[1]);
        int figures = int.Parse(parts[2]);
        
        int cars_by_tires = tires / 4;
        int cars_by_bodies = bodies;
        int cars_by_figures = figures / 2;

        int complete_cars = Math.Min(Math.Min(cars_by_tires, cars_by_bodies), cars_by_figures);
        
        Console.WriteLine(complete_cars);
    }
}



