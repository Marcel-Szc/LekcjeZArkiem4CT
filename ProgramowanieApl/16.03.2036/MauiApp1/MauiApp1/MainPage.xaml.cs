namespace MauiApp1
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }
        private void SprawdzOdp(object sender, EventArgs e)
        {
            int score = 0;

            if (Q1_Option2.IsChecked == true) { score += 1; }
            if (Q2_Option1.IsChecked == true) { score += 1; }
            if (Q3_Option1.IsChecked == true) { score += 1; }

            ResultLabel.Text = $"twój wynik: {score}/3";
        }
    }
}
