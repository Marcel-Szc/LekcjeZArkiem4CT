using NUnit.Framework;
using System;
using Kalkulator;
namespace Kalkualtor.Test
{
    public class KalkulatorTest
    {
        private Kalkulator _kalkulator();
        [SetUp]
        public void Setup()
        {
            _kalkulator = new Kalkualtor(5,5);
        }

        [Test]
        public void Dodawanie_powinno_wzrocic_sume_a_b()
        {
            //AAA
            //Arrange
            double result = 10;
            //Act
            double act = _kalkulator.Dodawanie();
            //Assert
            Assert.That(act,Is.EqualTo(result));
        }
        public void Odejmowanie_powinno_wzrocic_roznice_a_b()
        {
            //AAA
            //Arrange
            double result = 0;
            //Act
            double act = _kalkulator.Odejmowanie();
            //Assert
            Assert.That(act,Is.EqualTo(result));
        }
        public void Mnozenie_powinno_wzrocic_Iloczyn_a_b()
        {
            //AAA
            //Arrange
            double result = 25;
            //Act
            double act = _kalkulator.Mnozenie();
            //Assert
            Assert.That(act,Is.EqualTo(result));
        }
        public void Dzielenie_powinno_wzrocic_iloraz_a_b()
        {
            //AAA
            //Arrange
            double result = 1;
            //Act
            double act = _kalkulator.Dzielenie();
            //Assert
            Assert.That(act,Is.EqualTo(result));
        }
    }
}
