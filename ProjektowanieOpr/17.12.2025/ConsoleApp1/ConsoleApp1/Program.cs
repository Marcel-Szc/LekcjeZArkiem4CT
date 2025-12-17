namespace ConsoleApp1
{
    class Program
    {
        static void Main()
        {
            Console.Write("Podaj text do sprawdzenia: ");
            var text = Console.ReadLine();
            Console.Write("\nPodaj numer do sprawdzenia:");
            var number = Convert.ToInt32(Console.ReadLine());
            Wpisy<string,int> wpisy = new(text, number);
            Console.ReadLine();
        }
    }
    class Wpisy<T1, T2>
    {
        public Wpisy(T1 wpisS, T2 wpisI)
        {
            Console.WriteLine(Warunek_10_liter(wpisS));
            Console.WriteLine(Warunek_1020_liter(wpisS));
            Console.WriteLine(Warunek_string(wpisS));
            Console.WriteLine(Warunek_int(wpisI));
        }
        private static string Warunek_10_liter<T>(T wpis)
        {
            if(Convert.ToString(wpis).Length == 10)
            {
                return "10 liter";
            }
            else
            {
                return "";
            }
        }
        private static string  Warunek_1020_liter<T>(T wpis)
        {
            if (Convert.ToString(wpis).Length >= 10 && Convert.ToString(wpis).Length <= 20)
            {
                return "1020 liter";
            }
            else
            {
                return "";
            }
        }
        private string Warunek_string<T>(T wpis)
        {
            if (wpis is string)
            {
                return "String instance";
            }
            else if (wpis is int) 
            {
                return "int instance";
            }
            else
            {
                return "";
            }
        }
        private string Warunek_int<T>(T wpis)
        {
            if (wpis is int)
            {
                return "int instance";
            }
            else
            {
                return "";
            }
        }
    }
}