import { Component } from '@angular/core';

@Component({
  selector: 'app-dodawanie',
  standalone: false,
  templateUrl: './dodawanie.html',
  styleUrl: './dodawanie.css',
})
export class Dodawanie {
  title: String = 'Dodawanie';
  dodawanie(a: number, b: number): number{
    return a + b;
  }
}
