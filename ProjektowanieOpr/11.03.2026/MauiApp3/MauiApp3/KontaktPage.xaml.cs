namespace MauiApp3;

public partial class KontaktPage : ContentPage
{
    public KontaktPage()
    {
        InitializeComponent();
    }

    private async void OnSendClicked(object sender, EventArgs e)
    {
        await DisplayAlert(
            "Wys³ano",
            $"Tytu³: {TytulEntry.Text}\nWiadomoœæ: {WiadomoscEditor.Text}",
            "OK"
        );

        TytulEntry.Text = "";
        WiadomoscEditor.Text = "";
    }
}