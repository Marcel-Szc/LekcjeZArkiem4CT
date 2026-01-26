import { Component } from '@angular/core';

@Component({
  selector: 'app-animacjadruga',
  standalone: false,
  templateUrl: './animacjadruga.html',
  styleUrl: './animacjadruga.css',
})
export class Animacjadruga {
    nazwaAnimacji: String = "Animacja Pierwsza - PZS1";
    nazwaEfektu: String = "Przeżroczystość";
    foto: String = "public/zdjecia/tatry2.jpg";
    opacity: boolean = false;

    toggleOpacity(){
      this.opacity = !this.opacity;
    }
}
