using System;

class Program
{
    static void Main()
    {
        Console.Write("Podaj liczbę wierszy: ");
        int iloscWierszy = Convert.ToInt32(Console.ReadLine());
        Trojkat trojkat = new();
        trojkat.Pascal(iloscWierszy);
        Console.ReadKey();
    }
}
class Trojkat
{
    public void Pascal(int wiersze)
    {
        int[,] table = new int[wiersze, wiersze];
        for (int i = 0; i < wiersze; i++)
        {
            table[i, 0] = 1;
            for (int j =1; j <= i; j++)
            {
                if(j == i)
                {
                    table[i, j] = 1;
                }
                else
                {
                    table[i, j] = table[i - 1, j - 1] + table[i - 1, j];
                }
            }
        }
        for (int i = 0; i < wiersze; i++) 
        {
            int suma = 0;
            int LiczbyPierwsze = 0;
            Console.Write(" ");
            for(int j = 0; j <= i; j++)
            {
                if (table[i, j] % 2 != 0) { LiczbyPierwsze += table[i,j]; }
                Console.Write(table[i, j] + "  ");
                suma += table[i, j];
            }
            if (i == wiersze - 1)
            {
                Console.Write($"\nSuma: {suma} | Suma liczb pierwszych: {LiczbyPierwsze}");
            }
            Console.WriteLine();
        }
    }
}