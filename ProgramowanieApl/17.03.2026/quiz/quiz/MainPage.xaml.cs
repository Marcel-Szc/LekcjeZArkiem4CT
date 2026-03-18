using Microsoft.Maui.Controls;
namespace quiz
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void OnCheckAnswersClicked(object sender, EventArgs e)
        {
            int score = 0;

            // Pytanie 1
            if (Q1_Option2.IsChecked) score += 1;

            // Pytanie 2
            if (Q2_Option1.IsChecked) score += 1;

            // Pytanie 3
            if (Q3_Option1.IsChecked) score += 1;

            ResultLabel.Text = $"Poprawnych odpowiedzi: {score}/3";
        }
    }
}
