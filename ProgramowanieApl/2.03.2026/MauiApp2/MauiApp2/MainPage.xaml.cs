namespace MauiApp2
{
    public partial class MainPage : ContentPage
    {
        int clickCount = 0;
        bool buttonEnabled = true;
        public MainPage()
        {
            InitializeComponent();
        }
        private void PrzyciskKlikania(object? sender, EventArgs e)
        {
            StatusLabel.Text = "Status: przycisk został kliknięty";
        }

        private void PrzyciskZmienText(object sender, EventArgs e)
        {
            if(sender is Button btn)
            {
                btn.Text = "Kliknięto mnie!";
            }
        }

        private void PrzyciskZmienKolor(object sender, EventArgs e)
        {
            if (sender is Button btn)
            {
                btn.BackgroundColor = btn.BackgroundColor == Colors.LightBlue ? Colors.LightGreen : Colors.LightBlue;
            }
        }

        private void PrzyciskWlaczWylacz(object sender, EventArgs e)
        {
            buttonEnabled = !buttonEnabled;
            if (sender is Button btn)
            {
                btn.IsEnabled = buttonEnabled;
            }
            StatusLabel.Text = buttonEnabled ? "Przycisk włączony" : "Przycisk Wyłączony";
        }

        private void PrzyciskLicznik(object sender, EventArgs e)
        {
            clickCount++;
            StatusLabel.Text = $"Kliknięto {clickCount} razy";
        }

        private async void PrzyciskOdliczanie(object sender, EventArgs e)
        {
            StatusLabel.Text = "Odliczanie...";
            for (int i = 100; i >= 0; i--) {
                StatusLabel.Text = $"Start za: {i}";
                await Task.Delay(1000);
            }
        }
    }
}
