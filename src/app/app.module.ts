import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './Contador/contador/Contador.module';

import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule ,
    HeroesModule ,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
