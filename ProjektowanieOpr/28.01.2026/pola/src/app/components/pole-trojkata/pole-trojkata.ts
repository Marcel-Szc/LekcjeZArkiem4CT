import { Component } from '@angular/core';

@Component({
  selector: 'app-pole-trojkata',
  standalone: false,
  templateUrl: './pole-trojkata.html',
  styleUrl: './pole-trojkata.css',
})
export class PoleTrojkata {
title: String = "Trojkat";
  trojkat(a: number, h: number): number{
    return (a * h)/2;
  }
}
