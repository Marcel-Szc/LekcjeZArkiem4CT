using namespace std;
#include <iostream>

int main()
{
    int tablica[] = { 8,3,4,2,5,1 };
    int n = sizeof(tablica) / sizeof(tablica[0]); // rozmiar tablicy

    // moment sortowania w notacji O(n^2) czyli 4x4 = 16 operacji

    /* Wariant 1
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1; j++) {
            if (tablica[j] > tablica[j + 1]) {
                swap(tablica[j], tablica[j + 2]);
            }
        }
    }

    for (size_t i = 0; i < n; i++) {
        cout << tablica[i] << " ";
    }
    */
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i; j++) {
            if (tablica[j-1] > tablica[j + 1]) {
                swap(tablica[j-1], tablica[j]);
            }
        }
    }

    for (size_t i = 0; i < n; i++) {
        cout << tablica[i] << " ";
    }
}
