import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})

export class NoComunesComponent implements OnInit {

  nombre:string = 'Marcela';
  genero:string = 'femenino';
  bandera:boolean = true;
  clientes:string [] = ['Luis', 'Dario', 'Stella', 'Marcela', 'Luz'];

  invitacionObj = {
    'femenino':'invitarla',
    'masculino':'invitarlo'  
  }

  clientesObj={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'    
  }
  
  cambiarInvitado(){
    if(this.bandera){
      this.nombre = 'Arturo';
      this.genero = 'masculino'
      this.bandera = false;
    }
    else{
      this.nombre = 'Marcela';
      this.genero= 'femenino';
      this.bandera = true;
    }     
  }

  restarCliente(){
    this.clientes.length = this.clientes.length-1;
  }

  constructor() { }

  ngOnInit(): void { }

  persona = {
    nombre:'Luis Arturo',
    edad:48,
    ciudad: 'Bogota'
  }

  heroes = [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Aquaman',
      vuela:false
    },
    {
      nombre:'Mujer Maravilla',
      vuela:true
    }
  ]

  miObservable = interval(1000);
  
}
