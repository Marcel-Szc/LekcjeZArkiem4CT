/*
Zadanie :
Napisz program w python, c#, który realizuje operacje na tablicy liczb całkowitych przy użyciu klasy.
Wymagania :
    1. Pola klasy :
Tablica dynamiczna liczb całkowitych.
Liczba elementów tablicy(tylko do odczytu wewnątrz klasy).
Pola prywatne, niedostępne z zewnątrz klasy ani dla klas potomnych.
2. Konstruktor :
    Przyjmuje rozmiar tablicy jako argument.
    Wypełnia tablicę losowymi liczbami całkowitymi od 10 do 500.
    3. Metody klasy :
Wyświetl wszystkie elementy tablicy w formacie <index> : <wartość>.
Wyszukaj największą wartość w tablicy i zwróć jej indeks.
Oblicz sumę wszystkich liczb parzystych i zwróć wynik.
Zwróć liczbę elementów większych od podanej wartości(przekazanej jako argument).
4. Program główny :
Tworzy tablicę z co najmniej 15 elementami.
Testuje wszystkie metody klasy i wyświetla wyniki w czytelnej formie.
*/

#include <iostream>
#include <vector>
#include <cstdlib> 
#include <ctime>    
using namespace std;

class TablicaLiczb {
private:
    vector<int> tablica;
    int liczbaElementow;

public:
    TablicaLiczb(int rozmiar) {
        liczbaElementow = rozmiar;
        tablica.resize(rozmiar);
        srand(time(0));
        for (int i = 0; i < rozmiar; ++i) {
            tablica[i] = rand() % 491 + 10; 
        }
    }


    void Wyswietl() {
        for (int i = 0; i < liczbaElementow; ++i) {
            cout << i << " : " << tablica[i] << endl;
        }
    }

    int IndeksNajwiekszej() {
        int maxIndex = 0;
        for (int i = 1; i < liczbaElementow; ++i) {
            if (tablica[i] > tablica[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    int SumaParzystych() {
        int suma = 0;
        for (int i = 0; i < liczbaElementow; ++i) {
            if (tablica[i] % 2 == 0) {
                suma += tablica[i];
            }
        }
        return suma;
    }

    int IleWiekszychOd(int wartosc) {
        int licznik = 0;
        for (int i = 0; i < liczbaElementow; ++i) {
            if (tablica[i] > wartosc) {
                licznik++;
            }
        }
        return licznik;
    }
};

int main() {
    TablicaLiczb t(15); 

    cout << "Zawartość tablicy:\n";
    t.Wyswietl();

    int indeksMax = t.IndeksNajwiekszej();
    cout << "\nNajwiększa wartość jest na indeksie: " << indeksMax << endl;

    int sumaParzystych = t.SumaParzystych();
    cout << "Suma liczb parzystych: " << sumaParzystych << endl;

    int prog = 250;
    int wiekszeOd = t.IleWiekszychOd(prog);
    cout << "Liczba elementów większych od " << prog << ": " << wiekszeOd << endl;

    return 0;
}
