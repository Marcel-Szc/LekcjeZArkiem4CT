import { Component } from '@angular/core';

@Component({
  selector: 'app-normalny',
  standalone: false,
  templateUrl: './normalny.html',
  styleUrl: './normalny.css',
})
export class Normalny {
opisy: Opis[];
constructor(){
  this.opisy = [
    {imie: 'Jeffrey', nazwisko: "Epstein", wiek: 67, przedmiot: "Fizyka", foto: "assets/images3.jpg"},
    {imie: 'Jan', nazwisko: "Kowalski", wiek: 20, przedmiot: "Matematyka", foto: "assets/images.jpg"},
    {imie: 'Charlie', nazwisko: "Kirk", wiek: 31, przedmiot: "Muzyka", foto: "assets/images1.jpeg"},

  ]
}
}
class Opis{
  imie!: string;
  nazwisko!: string;
  wiek!: number;
  przedmiot!: string;
  foto!: string;
}