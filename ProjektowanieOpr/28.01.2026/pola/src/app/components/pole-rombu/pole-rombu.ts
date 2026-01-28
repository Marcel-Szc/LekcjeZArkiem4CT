import { Component } from '@angular/core';

@Component({
  selector: 'app-pole-rombu',
  standalone: false,
  templateUrl: './pole-rombu.html',
  styleUrl: './pole-rombu.css',
})
export class PoleRombu {
title: String = "Romb";
  romb(a: number, h: number): number{
    return a * h;
  }
}
