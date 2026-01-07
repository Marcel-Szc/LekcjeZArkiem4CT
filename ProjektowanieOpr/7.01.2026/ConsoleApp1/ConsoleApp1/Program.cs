namespace ConsoleApp1;
class Uczen
{
    private string _imie, _nazwisko;
    private double _sredniaOcen;

    public Uczen(string imie, string nazwisko, double sredniaOcen){
        _imie = imie;
        _nazwisko = nazwisko;
        _sredniaOcen = sredniaOcen;
    }

    public bool CzyZdany()
    {
        if (_sredniaOcen >= 2.0) {
            return true;
        }
        else
        {
            return false;
        }
    }
    public void WyswietlDane()
    {
        Console.WriteLine($"Imie: {_imie},\nNazwisko: {_nazwisko},\nSrednia Ocen: {_sredniaOcen}");
    }
}

class Program
{
    static void Main()
    {
        Uczen Charlie = new Uczen("Charlie", "Kirk", 6.7);
        Uczen George = new Uczen("George", "Floyd", 1.9);
        Charlie.WyswietlDane();
        Console.WriteLine($"Czy zdał: {Charlie.CzyZdany()}\n");
        George.WyswietlDane();
        Console.WriteLine($"Czy zdał: {George.CzyZdany()}\n");
    }
}