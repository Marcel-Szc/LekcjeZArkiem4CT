import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Animacjapierwsza } from './components/animacjapierwsza/animacjapierwsza';
import { Animacjadruga } from './components/animacjadruga/animacjadruga';
import { Animacjatrzecia } from './components/animacjatrzecia/animacjatrzecia';

const routes: Routes = [
  {path: '', component: Start},
  {path: 'animacjapierwsza', component: Animacjapierwsza},
  {path: 'animacjadruga', component: Animacjadruga},
  {path: 'animacjatrzecia', component: Animacjatrzecia},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
