import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'  
})

export class MainPageComponent{

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  constructor() { }

/*  agregarNuevoPersonaje(argumento:Personaje){
    console.log(argumento);
    this.personajes.push(argumento);
  }*/

  //constructor(private dbzService:DbzService) { }


/*  agregar(){
    if(this.nuevo.nombre.trim().length === 0) {return;}    
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  nuevo:Personaje ={
    nombre : '',
    poder : 0
  }*/




 /* agregar(event:any){
    event.preventDefault();
    console.log(event);
  }*/

}
