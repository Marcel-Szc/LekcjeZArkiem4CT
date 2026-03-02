using System;
using System.Threading.Tasks;
using Microsoft.Maui.Controls;

namespace Aplikacja_Maui
{
    public partial class MainPage : ContentPage
    {
        int clickCount = 0;
        bool buttonEnabled = true; // do przycisku włącz/wyłącz

        public MainPage()
        {
            InitializeComponent();
        }

        // 1) ZMIEN tekst
        private void OnClickMeClicked(object sender, EventArgs e)
        {
            StatusLabel.Text = "Status: Przycisk został kliknięty!";
        }

        // 2) ZMIEŃ tekst
        private void OnChangeTextClicked(object sender, EventArgs e)
        {
            if (sender is Button btn)
            {
                btn.Text = "Kliknięto!";
            }
        }

        // 3) ZMIEŃ kolor
        private void OnChangeColorClicked(object sender, EventArgs e)
        {
            if (sender is Button btn)
            {
                btn.BackgroundColor = btn.BackgroundColor == Colors.LightGreen
                    ? Colors.LightBlue
                    : Colors.LightGreen;
            }
        }

        // 4) Włącz / Wyłącz
        private void OnEnableDisableClicked(object sender, EventArgs e)
        {
            buttonEnabled = !buttonEnabled;

            if (sender is Button btn)
            {
                btn.IsEnabled = buttonEnabled;
            }

            StatusLabel.Text = buttonEnabled ? "Przycisk włączony" : "Przycisk wyłączony";
        }

        // 5) Licznik kliknięć
        private void OnCounterClicked(object sender, EventArgs e)
        {
            clickCount++;
            StatusLabel.Text = $"Kliknięto {clickCount} razy.";
        }

        // 6) Odliczanie
        private async void OnCountdownClicked(object sender, EventArgs e)
        {
            StatusLabel.Text = "Odliczanie...";
            for (int i = 5; i >= 1; i--)
            {
                StatusLabel.Text = $"Start za: {i}";
                await Task.Delay(1000);
            }
            StatusLabel.Text = "START!";
        }
    }
}