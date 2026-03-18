using Microsoft.Maui.HotReload;
using System.Text.Json;

namespace MauiApp1;

public partial class Wersja2 : ContentPage
{
    private readonly HttpClient _httpClient = new();
    public Wersja2()
	{
		InitializeComponent();
	}

    private async void GetWeather(object sender, EventArgs e)
    {
        try
        {
            string city="";
            var cityOption = Convert.ToString(CityPicker.SelectedItem);

            switch (cityOption)
            {
                case "Pszczyna":
                    city = "?latitude=49.9764&longitude=18.9586&current_weather=true";
                    break;
                case "Warszawa":
                    city = "?latitude=52.2298&longitude=21.0117&current_weather=true";
                    break;
                case "Kraków":
                    city = "?latitude=50.0614&longitude=19.9373&current_weather=true";
                    break;
                case "Gdañsk":
                    city = "?latitude=54.35218&longitude=18.6463&current_weather=true";
                    break;
            }
                


            string url = $"https://api.open-meteo.com/v1/forecast{city}";

            var response = await _httpClient.GetStringAsync(url);

            using var json = JsonDocument.Parse(response);
            var weather = json.RootElement.GetProperty("current_weather");

            double temperature = weather.GetProperty("temperature").GetDouble();
            double wind = weather.GetProperty("windspeed").GetDouble();

            WeatherLabel.Text = $"Pogoda dla {cityOption}\n Temperatura: {temperature}°C\n Wiatr: {wind} km/h";
        }
        catch (Exception ex)
        {
            WeatherLabel.Text = $"Wyst¹pi³ b³¹d: {ex.Message}";
        }
    }
}