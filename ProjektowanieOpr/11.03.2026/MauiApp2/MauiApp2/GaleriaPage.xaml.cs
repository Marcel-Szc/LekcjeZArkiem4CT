namespace MauiApp2;

public partial class GaleriaPage : ContentPage
{
	public GaleriaPage()
	{
		InitializeComponent();
	}

    private async void OnZoom_Clicked(object sender, EventArgs e)
    {
		await MainImage.ScaleTo(1.5, 200);
		await MainImage.ScaleTo(1, 300);
    }
}