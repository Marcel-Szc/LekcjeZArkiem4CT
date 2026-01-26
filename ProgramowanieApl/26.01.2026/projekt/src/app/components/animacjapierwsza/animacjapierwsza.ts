import { Component } from '@angular/core';

@Component({
  selector: 'app-animacjapierwsza',
  standalone: false,
  templateUrl: './animacjapierwsza.html',
  styleUrl: './animacjapierwsza.css',
})
export class Animacjapierwsza {
    nazwaAnimacji: String = "Animacja Pierwsza - PZS1";
    nazwaEfektu: String = "Powiększenie ZOOM";
    foto: String = "public/zdjecia/tatry1.jpg";
    zoom: boolean = false;

    toggleZoom(){
      this.zoom = !this.zoom;
    }
}
