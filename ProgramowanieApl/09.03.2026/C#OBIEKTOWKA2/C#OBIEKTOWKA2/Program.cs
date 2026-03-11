class Program
{
    static Random random = new Random();

    public static void Main(string[] args)
    {
        Program p = new Program();
        int[] licznik = new int[50];

        Console.WriteLine("Losowanie randomowe <1-49>");

        for (int l = 1; l <= 10; l++)
        {
            int[] wynik = p.losowanie();
            {
                Console.Write($"nr {l}: ");

                foreach (int x in wynik)
                {
                    Console.Write($"{x} ");
                    licznik[x]++;
                }

                Console.WriteLine();
            }

            Console.WriteLine("\nPODSUMOWANIE");

            for (int i = 1; i <= 49; i++)
            {
                if (licznik[i] > 0)
                {
                    Console.WriteLine($"liczba {i} - {licznik[i]} razy");
                }
            }
        }
    }

    public int[] losowanie()
    {
        int[] wylosowano = new int[6];

        for (int i = 0; i < 6; i++)
        {
            int liczba;

            do
            {
                liczba = random.Next(1, 50);
            }
            while (Array.Exists(wylosowano, x => x == liczba));

            wylosowano[i] = liczba;
        }

        return wylosowano;
    }
}

