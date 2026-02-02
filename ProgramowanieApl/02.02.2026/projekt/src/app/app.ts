import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  user = {
    imie:'',
    nazwisko:'',
    wiek:null
  }

  constructor(private http: HttpClient){}

  submitForm(){
    this.http.post('http://localhost:3000/users',this.user).subscribe({
      next: () => alert('zapisano do bazy danych'),
      error: () => alert('BOMBOCLAT - nie zapisano do bazy')
    });
  }
  
}
