import { Component } from '@angular/core';

@Component({
  selector: 'app-banan',
  standalone: false,
  templateUrl: './banan.html',
  styleUrl: './banan.css',
})
export class Banan {

owoce!: Owoc[];
  efekt1: Boolean = false;
  efekt2: Boolean = false;
  efekt3: Boolean = false;
  constructor(){
    this.owoce = [
      {nazwaOwocu: "BananNr1", nazwaEfektu: "Splaszczenie", foto:"public/zdjecia/banan.jpg"},
      {nazwaOwocu: "BananNr2", nazwaEfektu: "Zgniecenie", foto:"public/zdjecia/banan.jpg"},
      {nazwaOwocu: "BananNr3", nazwaEfektu: "Zoom", foto:"public/zdjecia/banan.jpg"}
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

