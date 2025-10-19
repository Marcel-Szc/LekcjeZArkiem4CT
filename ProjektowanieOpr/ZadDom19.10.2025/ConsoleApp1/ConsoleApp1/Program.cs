class Program
{
    static void Main(string[] args)
    {
        Szyfr szyfr = new();
        Console.WriteLine(szyfr.Cezar());
    }
}
class Szyfr
{
    public string Cezar()
    {
        string text = "Ala ma kotaz";
        int shift = 3;
        string wynik = "";

        for(int i = 0; i < text.Length; i++)
        {
            char c = text[i];
            if (char.IsLetter(c))
            {
                char d = char.IsUpper(c) ? 'A' : 'a';
                char shifted = (char)((((c + shift) - d) % 26) + d);
                wynik += shifted;
            }
            else
            {
                wynik += c;
            }
        }

        return wynik;
    }
}