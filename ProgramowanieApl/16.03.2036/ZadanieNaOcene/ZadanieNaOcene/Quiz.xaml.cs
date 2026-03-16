namespace ZadanieNaOcene;

public partial class Quiz : ContentPage
{
	private List<(string Question, string Option1, string Option2, int CorrectOption)> quiz = new() {
		("W którym roku Jeffrey Epstein zosta³ po raz pierwszy aresztowany w zwi¹zku z zarzutami wykorzystania nieletnich w stanie floryda?","2005","2008", 1),
        ("Jak nazywa³a siê d³ugoletnia partnerka i wspó³pracowniczka Epsteina, skazana w 2021 za pomoc w werbowaniu i wykorzystywaniu nieletnich dziewcz¹t?","Melanie Trump","Ghislaine Maxwell", 2),
        ("Jak potocznie jest nazywana wyspa Epsteina na Wyspach Dziewiczych Stanów Zjednoczonych, na której mia³o dochodziæ do przestêpstw?","Island of Sin","Cayo Perico", 1),
        ("Jaki by³ oficjalny wynik sekcji zw³ok i ostateczna przyczyna œmierci Jeffrey Epsteina w areszcie w 2019 roku?","Samobójstwo przez powieszenie","Asasynacja przez Mossad", 1),
        ("W którym roku i w jakim stanie epstein zwar³ bardzo kontrowersyjn¹ ugodê plea deal, dziêki której unikn¹³ d³ugoletniego wiêzienia federalnego?","2009, Texas","2008, Floryda", 2),
    };

	private int currentQuestionIndex = 0;
	private int score = 0;
	public Quiz()
	{
		InitializeComponent();
		ShowQuestion();
	}
	private void ShowQuestion()
	{
		if (currentQuestionIndex < quiz.Count)
		{
			var q = quiz[currentQuestionIndex];
			QuestionLabel.Text = q.Question;
			Option1.Content = q.Option1;
            Option2.Content = q.Option2;
			Option1.IsChecked = false;
            Option2.IsChecked = false;
			ResultLabel.Text = "";
			NextButton.IsVisible = true;
        }
		else
		{
			QuestionLabel.Text = "Koniec quizu!";
			Option1.IsVisible = false;
            Option2.IsVisible = false;
            NextButton.IsVisible = false;
			ResultLabel.Text = $"Twój wynik to: {score}/{quiz.Count}";
        }
	}

    private void OnNextClicked(object sender, EventArgs e)
    {
		int selected = Option1.IsChecked ? 1 : Option2.IsChecked ? 2 : 0;
		int correctOption = quiz[currentQuestionIndex].CorrectOption;
		if (selected == correctOption) { score++; }

		currentQuestionIndex++;
		ShowQuestion();
	}
}