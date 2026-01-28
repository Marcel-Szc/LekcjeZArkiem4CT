import { Component } from '@angular/core';

@Component({
  selector: 'app-pole-prostokata',
  standalone: false,
  templateUrl: './pole-prostokata.html',
  styleUrl: './pole-prostokata.css',
})
export class PoleProstokata {
  title: String = "Prostokat";
  prostokat(a: number, b: number): number{
    return a * b;
  }
}
