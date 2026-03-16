namespace Zainteresowania;

public partial class Email : ContentPage
{
	public Email()
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