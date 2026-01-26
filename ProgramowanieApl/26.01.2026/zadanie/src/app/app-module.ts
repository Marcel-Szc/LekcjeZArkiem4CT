import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './components/start/start';
import { Banan } from './components/banan/banan';
import { Japko } from './components/japko/japko';
import { Durian } from './components/durian/durian';

@NgModule({
  declarations: [
    App,
    Start,
    Banan,
    Japko,
    Durian
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
