namespace ZadanieNaOcene;

public partial class Galeria : ContentPage
{
    bool clickedE1 = false;
    bool clickedE2 = false;
    bool clickedE3 = false;
    bool clickedE4 = false;
    public Galeria()
	{
		InitializeComponent();
	}

    private void efekt1(object sender, EventArgs e)
    {
        if (!clickedE1) {
            Foto1.ScaleTo(1.5);
            clickedE1 = !clickedE1;
        }
        else
        {
            Foto1.ScaleTo(1);
            clickedE1 = !clickedE1;
        }
    }
    private void efekt2(object sender, EventArgs e)
    {
        if (!clickedE2)
        {
            Foto2.ScaleTo(0.5);
            clickedE2 = !clickedE2;
        }
        else
        {
            Foto2.ScaleTo(1);
            clickedE2 = !clickedE2;
        }
    }
    private void efekt3(object sender, EventArgs e)
    {
        if (!clickedE3)
        {
            Foto3.RotateTo(45);
            clickedE3 = !clickedE3;
        }
        else
        {
            Foto3.RotateTo(0);
            clickedE3 = !clickedE3;
        }
    }
    private void efekt4(object sender, EventArgs e)
    {
        if (!clickedE4)
        {
            Foto4.RotateTo(-45);
            clickedE4 = !clickedE4;
        }
        else
        {
            Foto4.RotateTo(0);
            clickedE4 = !clickedE4;
        }
    }
}