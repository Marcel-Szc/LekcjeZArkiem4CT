print("ARKUSZ inf_04_01_02_SG - 26.11.2025")
#------------------------------------------
class Urzadzenie:
    def kominukat(self,tresc: str)->None:
        print(tresc)
        
class Pralka(Urzadzenie):
    def __init__(self):
        self.__numer_programu: int = 0

    def ustaw_program(self,numer)->int:

        if isinstance(numer,int) and 1 <= numer <= 12:
            self.__numer_programu = numer
            print(f"{numer}\nProgram został ustawiony")

        else: 
            self.__numer_programu = 0
            print(f"{numer}\n Podano nieprawidłowy numer programu")

        return self.__numer_programu

class Odkurzacz(Urzadzenie):
    def __init__(self):
        self.__stan: bool = False

    def on(self):
        if not self.__stan:
            self.__stan = True
            self.kominukat("Odkurzacz włączono")

    def off(self):
        if self.__stan:
            self.__stan = False
            self.kominukat("Odkurzacz wyłączono")

def main():
    pralka = Pralka()
    odkurzacz = Odkurzacz()

    print("Podaj numer prania 1...12")
    wejscie = int(input("Wpisz numerp orogramu prania: "))

    try:
        numer = int(wejscie)
    except ValueError:
        numer = wejscie
    
    wynik = pralka.ustaw_program(numer)
    print(f"Zwrócony numer programu: {wynik}\n")

    odkurzacz.on()
    odkurzacz.on()
    odkurzacz.on()
    odkurzacz.kominukat("Odkurzacz wyładował się")
    odkurzacz.off()