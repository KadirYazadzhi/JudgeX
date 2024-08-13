import java.util.Scanner;

public class Main {
    static void fullMatrix(int n, int[][] arr) {
        int num = 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                arr[i][j] = num++;
            }
        }
    }

    static void printMatrix(int n, int[][] arr) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        int[][] arr = new int[n][n];

        fullMatrix(n, arr);
        printMatrix(n, arr);
    }
}



