using System.Diagnostics.Metrics;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace zadanie1
{
    public partial class MainPage : ContentPage
    {
        bool stop = false;
        public MainPage()
        {
            InitializeComponent();
        }

        private async void CounterBtn_Clicked(object sender, EventArgs e)
        {
            for(int i = 10; i > 0; i--)
            {
                if (stop)
                {
                    CounterLabel.Text = "STOP";
                }
                else
                {
                    CounterLabel.Text = i.ToString();
                    await Task.Delay(1000);
                }
            }
            await DisplayAlert("Start","Gotowe", "OK");
        }

        private void OnReset_Clicked(object sender, EventArgs e)
        {
            CounterLabel.Text = "Zaraz startujemy chopaki";
        }

        private async void Stop_Clicked(object sender, EventArgs e)
        {
            stop = !stop;
        }

        private void CounterBtnColor_Clicked(object sender, EventArgs e)
        {
            CounterLabel.BackgroundColor = Color.FromRgb(20, 20, 200);
        }
    }
}
