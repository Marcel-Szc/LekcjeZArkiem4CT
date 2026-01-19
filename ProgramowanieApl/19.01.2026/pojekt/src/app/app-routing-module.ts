import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Normalny } from './components/normalny/normalny';
import { Start } from './components/start/start';
import { Nudny } from './components/nudny/nudny';
import { Zarabisty } from './components/zarabisty/zarabisty';

const routes: Routes = [
  {path: '', component: Start},
  {path: 'normalny', component: Normalny},
  {path: 'nudny', component: Nudny},
  {path: 'zarabisty', component: Zarabisty}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
