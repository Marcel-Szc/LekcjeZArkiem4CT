namespace MauiApp3
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
            Title = "Button Launcher";
        }
        private async Task AnimateButton(Button btn)
        {
            await btn.ScaleTo(0.9, 100);
            await btn.ScaleTo(1, 100);
        }
        private async void OnGoogleClicked(object sender, EventArgs e)
        {
            if (sender is Button btn) await AnimateButton(btn);
            await Launcher.OpenAsync("https://www.google.com");
        }

        private async void OnTwitterClicked(object sender, EventArgs e)
        {
            if (sender is Button btn) await AnimateButton(btn);
            await Launcher.OpenAsync("https://www.X.com");
        }

        private async void OnYoutubeClicked(object sender, EventArgs e)
        {
            if (sender is Button btn) await AnimateButton(btn);
            await Launcher.OpenAsync("https://www.Youtube.com");
        }

        private async void OnGitHubClicked(object sender, EventArgs e)
        {
            if (sender is Button btn) await AnimateButton(btn);
            await Launcher.OpenAsync("https://www.github.com");
        }
    }
}
