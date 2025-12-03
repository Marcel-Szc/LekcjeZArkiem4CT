using System;
namespace Kalkulator
{
    public class Kalkulator{
        private double a;
        private double b;
        public Kalkulator(double a,double b)
        {
            this.a = a;
            this.b = b;
        }

        public double Dodawanie()
        {
            return this.a + this.b;
        }
        public double Odejmowanie()
        {
            return this.a - this.b;
        }
        public double Mnozenie()
        {
            return this.a + this.b;
        }
        public double Dzielenie()
        {
            if(b==0)
                throw new ArgumentException("Nie Dziel prze zero!");
            return this.a / this.b;
        }
    }
}