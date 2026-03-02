namespace MauiApp5
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void Add(object sender, EventArgs e)
        {
            double a = double.Parse(A.Text);
            double b = double.Parse(B.Text);
            Result.Text = (a + b).ToString();
        }
        private void Sub(object sender, EventArgs e)
        {
            double a = double.Parse(A.Text);
            double b = double.Parse(B.Text);
            Result.Text = (a - b).ToString();
        }
        private void Mul(object sender, EventArgs e)
        {
            double a = double.Parse(A.Text);
            double b = double.Parse(B.Text);
            Result.Text = (a * b).ToString();
        }
        private void Div(object sender, EventArgs e)
        {
            double a = double.Parse(A.Text);
            double b = double.Parse(B.Text);
            Result.Text = (a / b).ToString();
        }

    }
}
