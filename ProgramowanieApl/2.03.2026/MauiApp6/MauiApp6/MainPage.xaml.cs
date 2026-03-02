namespace MauiApp6
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void ButtonOblicz(object sender, EventArgs e)
        {
            double wzrost = double.Parse(Wzrost.Text) / 100;
            double waga = double.Parse(Waga.Text);

            double wynik = waga/(Math.Pow(wzrost, 2));

            if(wynik < 18.5)
            {
                Result.Text = "Niedowaga";
                Result.TextColor = Colors.Blue;
            }
            else if (wynik > 24.9)
            {
                Result.Text = "Nadwaga";
                Result.TextColor = Colors.Orange;
            } else
            {
                Result.Text = "Prawidłowe BMI";
                Result.TextColor = Colors.Green;
            }

                Wynik.Text = $"Twoje BMI to: {wynik.ToString()}";
        }
    }
}
