namespace MauiApp1
{
    public partial class KontaktPage : ContentPage
    {
        public KontaktPage()
        {
            InitializeComponent();
        }

        private async void PoKliknieciuWyslij(object sender, EventArgs e)
        {
            await DisplayAlert("Wys³ano wiadomoœæ", $"Tytu³: {EntryTytul.Text}\n'  {WiadomoscEdytor.Text}'", "OK");
            EntryTytul.Text = "";
            WiadomoscEdytor.Text = "";
        }
    }
}