import { Component } from '@angular/core';

@Component({
  selector: 'app-animacjatrzecia',
  standalone: false,
  templateUrl: './animacjatrzecia.html',
  styleUrl: './animacjatrzecia.css',
})
export class Animacjatrzecia {
    nazwaAnimacji: String = "Animacja Pierwsza - PZS1";
    nazwaEfektu: String = "Powiększenie ZOOM";
    foto: String = "public/zdjecia/tatry3.jpg";
    rotate: boolean = false;

    toggleRotate(){
      this.rotate = !this.rotate;
    }
}
