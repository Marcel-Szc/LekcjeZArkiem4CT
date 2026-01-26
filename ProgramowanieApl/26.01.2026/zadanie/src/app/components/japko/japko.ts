import { Component } from '@angular/core';

@Component({
  selector: 'app-japko',
  standalone: false,
  templateUrl: './japko.html',
  styleUrl: './japko.css',
})
export class Japko {
owoce!: Owoc[];
  efekt1: Boolean = false;
  efekt2: Boolean = false;
  efekt3: Boolean = false;
  constructor(){
    this.owoce = [
      {nazwaOwocu: "JapkoNr1", nazwaEfektu: "OpaLow", foto:"public/zdjecia/japko.jpg"},
      {nazwaOwocu: "JapkoNr2", nazwaEfektu: "OpaMed", foto:"public/zdjecia/japko.jpg"},
      {nazwaOwocu: "JapkoNr3", nazwaEfektu: "OpaHigh", foto:"public/zdjecia/japko.jpg"}
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

