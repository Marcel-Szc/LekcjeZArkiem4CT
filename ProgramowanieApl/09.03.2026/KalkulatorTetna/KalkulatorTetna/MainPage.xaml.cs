namespace KalkulatorTetna
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void Button_Clicked(object sender, EventArgs e)
        {
            if(!double.TryParse(wiek.Text, out double age) || !double.TryParse(tetno.Text, out double puls))
            {
                wiek.Text = "Błąd";
                tetno.Text = "Błąd";
                return;
            }
            if (age <= 0 || puls <= 60) 
            {
                wiek.Text = "wiek > 0";
                tetno.Text = "puls > 60";
                return;
            }
            double wynik = 220 - age;
            Result.Text = $"Prawidłowe Tętno: {wynik} bpm";

        }
    }
}
