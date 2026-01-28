import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PoleTrojkata } from './components/pole-trojkata/pole-trojkata';
import { PoleTrapezu } from './components/pole-trapezu/pole-trapezu';
import { PoleRombu } from './components/pole-rombu/pole-rombu';
import { PoleProstokata } from './components/pole-prostokata/pole-prostokata';

@NgModule({
  declarations: [
    App,
    PoleTrojkata,
    PoleTrapezu,
    PoleRombu,
    PoleProstokata
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
