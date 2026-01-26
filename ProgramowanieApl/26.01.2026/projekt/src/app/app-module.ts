import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './components/start/start';
import { Animacjapierwsza } from './components/animacjapierwsza/animacjapierwsza';
import { Animacjadruga } from './components/animacjadruga/animacjadruga';
import { Animacjatrzecia } from './components/animacjatrzecia/animacjatrzecia';

@NgModule({
  declarations: [
    App,
    Start,
    Animacjapierwsza,
    Animacjadruga,
    Animacjatrzecia
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
