import { Component } from '@angular/core';

@Component({
  selector: 'app-odejmowanie',
  standalone: false,
  templateUrl: './odejmowanie.html',
  styleUrl: './odejmowanie.css',
})
export class Odejmowanie {
title: String = 'Odejmowanie';
  odejmowanie(a: number, b: number): number{
    return a-b;
  }
}
