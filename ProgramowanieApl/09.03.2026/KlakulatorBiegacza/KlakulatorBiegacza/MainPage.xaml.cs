namespace KlakulatorBiegacza
{
    public partial class MainPage : ContentPage
    {

        public MainPage()
        {
            InitializeComponent();
        }

        private void Button_Clicked(object sender, EventArgs e)
        {
            if(!double.TryParse(DistanceEntry.Text, out double distance) || 
                !double.TryParse(TimeEntry.Text, out double time))
            {
                SpeedLabel.Text = "Błąd";
                PaceLabel.Text = "Błąd";
                return;
            }
            if(distance <= 0 || time <= 0)
            {
                SpeedLabel.Text = "Prękość > 0";
                PaceLabel.Text = "Czas > 0";
                return;
            }

            double timeHours = time / 60.0;
            double speed = distance / timeHours;

            double pace = time / distance;

            SpeedLabel.Text = $"{Math.Round(speed, 1)} KM/H";
            PaceLabel.Text = FormatPace(pace);
        }
        private string FormatPace(double pace)
        {
            int minutes = (int)pace;
            int seconds = ((int)pace - minutes) * 60;
            return $"{minutes}:{seconds:D2} Min/KM";
        }
    }
}
