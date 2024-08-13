import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        String[] parts = input.split(",");
        int tires = Integer.parseInt(parts[0].trim());
        int bodies = Integer.parseInt(parts[1].trim());
        int figures = Integer.parseInt(parts[2].trim());

        int cars_by_tires = tires / 4;
        int cars_by_bodies = bodies;
        int cars_by_figures = figures / 2;

        int complete_cars = Math.min(Math.min(cars_by_tires, cars_by_bodies), cars_by_figures);

        System.out.println(complete_cars);

        scanner.close();
    }
}




