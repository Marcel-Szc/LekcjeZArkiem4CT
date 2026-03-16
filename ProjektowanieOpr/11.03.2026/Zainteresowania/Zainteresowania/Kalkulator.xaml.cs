namespace Zainteresowania;

public partial class Kalkulator : ContentPage
{
	public Kalkulator()
	{
		InitializeComponent();
	}
    private void SprawdzSen(object sender, EventArgs e)
    {
        int godziny = int.Parse(godzinySnu.Text);

        if (godziny < 7)
        {
            wynik.Text = "Spa³eœ za ma³o!";
        }
        else if (godziny <= 9)
        {
            wynik.Text = "Spa³eœ dobrze!";
        }
        else
        {
            wynik.Text = "Spa³eœ za du¿o!";
        }
    }
}