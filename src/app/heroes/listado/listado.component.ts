import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {


heroes: string[] = ['spiderman' , 'superman' , 'aquaman']

heroeborrado : string | undefined = ''


  borrarHeroe()  {

  this.heroeborrado = this.heroes.shift();



}


}


