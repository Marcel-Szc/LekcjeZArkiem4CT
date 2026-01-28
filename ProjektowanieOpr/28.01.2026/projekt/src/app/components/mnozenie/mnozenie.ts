import { Component } from '@angular/core';

@Component({
  selector: 'app-mnozenie',
  standalone: false,
  templateUrl: './mnozenie.html',
  styleUrl: './mnozenie.css',
})
export class Mnozenie {
  title: String = "Mnozenie"
mnozenie(a: number, b: number): number{
    return a * b;
  }
}
