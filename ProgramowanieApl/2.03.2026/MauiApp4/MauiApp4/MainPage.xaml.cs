using static Microsoft.Maui.ApplicationModel.Permissions;

namespace MauiApp4
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void OnStylelClicked(object sender, EventArgs e)
        {
            SetPhotoStyle(1.2, 0, 0, Colors.LightBlue);
        }

        private void OnStyle2Clicked(object sender, EventArgs e)
        { 
            SetPhotoStyle(1.0, 45, 0, Colors.LightPink); 
        }

        private void OnStyle3Clicked(object sender, EventArgs e)
        {
            SetPhotoStyle(0.8, 0, 5, Colors.LightGreen); 
        }
        private void OnStyle4Clicked(object sender, EventArgs e)
        { 
            SetPhotoStyle(1.5, -30, 10, Colors.LightYellow); 
        }
        private void SetPhotoStyle(double scale, double rotation, double cornerRadius, Color borderColor)
        {
            ApplyStyle(Photo1Frame, Photo1, scale, rotation, cornerRadius, borderColor); 
            ApplyStyle(Photo2Frame, Photo2, scale, rotation, cornerRadius, borderColor);
            ApplyStyle(Photo3Frame, Photo3, scale, rotation, cornerRadius, borderColor);
            ApplyStyle(Photo4Frame, Photo4, scale, rotation, cornerRadius, borderColor);
        }
        private void ApplyStyle(Frame frame, Image photo, double scale, double rotation, double cornerRadius, Color borderColor)
        {
            photo.Scale = scale;
            photo.Rotation = rotation;
            frame.CornerRadius = (float)cornerRadius;
            frame.BorderColor = borderColor;

        }

    }
}
