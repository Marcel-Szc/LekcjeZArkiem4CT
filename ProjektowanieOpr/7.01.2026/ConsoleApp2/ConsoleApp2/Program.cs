class KontoBankowe
{
    public int _NumerKonta;
    public double _Saldo;

    public KontoBankowe(int numerKonta, double saldo)
    {
        _NumerKonta = numerKonta;
        _Saldo = saldo;
    }
    public void WyswietlSaldo()
    {
        Console.WriteLine($"Nr: {_NumerKonta}, \nSaldo: {_Saldo}");
    }
}
class KontoOszczednosciowe : KontoBankowe
{
    private double _Oprocentowanie;
    public KontoOszczednosciowe(int numerKonta, double saldo, double oprocentowanie) : base(numerKonta, saldo)
    {
        _Oprocentowanie = oprocentowanie;
    }
    public void ObliczOdsetki()
    {

    }
    public void WyswietlSaldo()
    {
        Console.WriteLine($"Nr: {_NumerKonta}, \nSaldo: {_Saldo}, \nOproentowanie: {_Oprocentowanie}");
    }
}
class Program
{
    static void Main()
    {
        KontoOszczednosciowe bank = new KontoOszczednosciowe(123425,5000.00,5);
        bank.WyswietlSaldo();
    }
}