namespace MauiApp2;

public partial class KontaktPage : ContentPage
{
	public KontaktPage()
	{
		InitializeComponent();
	}

    private async void OnClick_Send(object sender, EventArgs e)
    {
		if (string.IsNullOrWhiteSpace(TitleEntry.Text) || string.IsNullOrWhiteSpace(MessageEditor.Text))
		{
			await DisplayAlert("Nie przes³ano wiadomoœci", "Uzupe³nij wszystkie pola", "OK");
			return; 
		}
		
		await DisplayAlert("Przes³ano wiadomosc", $"Tytu³: {TitleEntry.Text}\n Tresc: {MessageEditor.Text}", "OK");
		TitleEntry.Text = "";
		MessageEditor.Text = "";


    }
}