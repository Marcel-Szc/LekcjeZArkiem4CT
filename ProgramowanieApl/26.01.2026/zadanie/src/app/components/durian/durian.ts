import { Component } from '@angular/core';

@Component({
  selector: 'app-durian',
  standalone: false,
  templateUrl: './durian.html',
  styleUrl: './durian.css',
})
export class Durian {
  owoce!: Owoc[];
  efekt1: Boolean = false;
  efekt2: Boolean = false;
  efekt3: Boolean = false;
  constructor(){
    this.owoce = [
      {nazwaOwocu: "DurianNr1", nazwaEfektu: "DegP", foto:"public/zdjecia/durian.jpg"},
      {nazwaOwocu: "DurianNr2", nazwaEfektu: "DegL", foto:"public/zdjecia/durian.jpg"},
      {nazwaOwocu: "DurianNr3", nazwaEfektu: "Prosty", foto:"public/zdjecia/durian.jpg"}
    ];
  }
  toggleEfekt1(){
    this.efekt1 = !this.efekt1;
  }
  toggleEfekt2(){
    this.efekt2 = !this.efekt2;
  }
  toggleEfekt3(){
    this.efekt3 = !this.efekt3;
  }
}

class Owoc{
  nazwaOwocu!: String;
  nazwaEfektu!: String;
  foto!: String;
}
