import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dodawanie } from './components/dodawanie/dodawanie';
import { Odejmowanie } from './components/odejmowanie/odejmowanie';
import { Mnozenie } from './components/mnozenie/mnozenie';
import { Dzielenie } from './components/dzielenie/dzielenie';
import { Potegowanie } from './components/potegowanie/potegowanie';

@NgModule({
  declarations: [
    App,
    Dodawanie,
    Odejmowanie,
    Mnozenie,
    Dzielenie,
    Potegowanie
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
