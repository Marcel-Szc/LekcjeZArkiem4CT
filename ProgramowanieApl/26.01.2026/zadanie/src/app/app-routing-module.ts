import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Start } from './components/start/start';
import { Durian } from './components/durian/durian';
import { Japko } from './components/japko/japko';
import { Banan } from './components/banan/banan';

const routes: Routes = [
  {path: '', component: Start},
  {path: 'durian', component: Durian},
  {path: 'japko', component: Japko},
  {path: 'banan', component: Banan},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
