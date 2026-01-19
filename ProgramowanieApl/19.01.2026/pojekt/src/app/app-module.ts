import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Start } from './components/start/start';
import { Nudny } from './components/nudny/nudny';
import { Normalny } from './components/normalny/normalny';
import { Zarabisty } from './components/zarabisty/zarabisty';

@NgModule({
  declarations: [
    App,
    Start,
    Nudny,
    Normalny,
    Zarabisty
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
