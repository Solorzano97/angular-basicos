import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
  <h1>Hola puto {{title}} </h1>

  <h1> la base es {{base}}</h1>

  <button (click)=" acumular(base)"> {{base}} </button>
  <span> {{ numero }}</span>
  <button (click)=" acumular(-base)"> {{base}} </button>
  `
})


export class ContadorComponent {
  title = 'contador App';

  numero = 10;

  base = 5;

  acumular( valor : number){
    this.numero += valor
  }
}
