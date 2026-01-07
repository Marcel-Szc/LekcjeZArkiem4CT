interface IPojazd
{
    public void Jedz()
    {
        Console.WriteLine("Jade");
    }
}
class Rower : IPojazd
{
    public void Jedz()
    {
        Console.WriteLine("Jade Rowerem");
    }
}
class Samochod : IPojazd
{
    public void Jedz()
    {
        Console.WriteLine("Jade Samochodem");
    }
}
class Program
{
    static void Main()
    {
        IPojazd[] pojazdy = new IPojazd[2];
        
        pojazdy[0] = new Rower();
        pojazdy[1] = new Samochod();

        foreach(IPojazd pojazd in pojazdy)
        {
            pojazd.Jedz();
        }
    }
}