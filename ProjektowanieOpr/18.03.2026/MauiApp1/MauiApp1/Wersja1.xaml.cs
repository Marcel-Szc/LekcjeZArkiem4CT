using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
namespace MauiApp1;

public partial class Wersja1 : ContentPage
{
	private readonly HttpClient _httpClient = new();
	public Wersja1()
	{
		InitializeComponent();
	}

    private async void GetWeather(object sender, EventArgs e)
    {
		try
		{
			string url =
                "https://api.open-meteo.com/v1/forecast" +
                "?latitude=49.9764&longitude=18.9586&current_weather=true";

			var response = await _httpClient.GetStringAsync(url);

			using var json = JsonDocument.Parse(response);
			var weather = json.RootElement.GetProperty("current_weather");

			double temperature = weather.GetProperty("temperature").GetDouble();
            double wind = weather.GetProperty("windspeed").GetDouble();

			WeatherLabel.Text = $"Pogoda dla Pszczyny\n Temperatura: {temperature}°C\n Wiatr: {wind} km/h";
        }
		catch (Exception ex) { 
		WeatherLabel.Text = $"Wyst¹pi³ b³¹d: {ex.Message}";
		}
    }
}