using Windows.Graphics.Printing;

namespace MauiApp1
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            Title = "PZS NR1";
            List<ListaNazw> lista = new List<ListaNazw>() { 
                new ListaNazw { Imie="Arkadiusz", Nazwisko="Waliczek" },
                new ListaNazw { Imie="Charlie", Nazwisko="Kirk" },
                new ListaNazw { Imie="Benjamin", Nazwisko="Netanyahu" },
                new ListaNazw { Imie="George", Nazwisko="Floyd" },
            };
            MojaLista.ItemsSource = lista;
        }
        public class ListaNazw
        {
            public string Imie { get; set; }
            public string Nazwisko { get; set; }
        }

        private async void ListaWybrana(object sender, SelectedItemChangedEventArgs e)
        {
            if(e.SelectedItem is ListaNazw listaNazw)
            {
                await DisplayAlert("Wybrano z Listy: ",$"Nazwa: {listaNazw.Imie} {listaNazw.Nazwisko}","OK");
            }
        }
    }
}
