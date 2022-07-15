import { Component } from "@angular/core";


@Component({
  selector : 'app-heroe' ,
  templateUrl: 'herore.component.html'
})

export class HeroeComponent{

   nombre =  'ironaman';
   edad = 45

   get nombreCapitalizado(){
    return this.nombre.toLocaleUpperCase();
   }
   obtenerNombre (){
    return this.nombre + '-' + this.edad
   }

   cambiarNombre(){
    this.nombre = 'spiderman'
   }

   cambiarEdad(){
    this.edad = 30
   }
}
