import { Component } from '@angular/core';

@Component({
  selector: 'app-pole-trapezu',
  standalone: false,
  templateUrl: './pole-trapezu.html',
  styleUrl: './pole-trapezu.css',
})
export class PoleTrapezu {
  title: String = "Trapezu";
  trapez(a: number, b: number, h: number): number{
    return ((a+b)*h)/2;
  }
}
