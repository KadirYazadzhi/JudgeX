using System;

class Program {
    static void FullMatrix(int n, int[,] arr) {
        int num = 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                arr[i, j] = num++;
            }
        }
    }

    static void PrintMatrix(int n, int[,] arr) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                Console.Write(arr[i, j] + " ");
            }
            Console.WriteLine();
        }
    }

    static void Main() {
        int n = int.Parse(Console.ReadLine());

        int[,] arr = new int[n, n];

        FullMatrix(n, arr);
        PrintMatrix(n, arr);
    }
}


