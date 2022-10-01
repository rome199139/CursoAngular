import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent implements OnInit {
  esTexto:boolean = true;
  ordenarPor:string = '';
  heroes: Heroe [] = [
    { nombre: 'Superman',
      vuela : true,
      color: Color.azul
  },
  { nombre: 'Batman',
      vuela : false,
      color: Color.negro
  },
  { nombre: 'Linterna Verde',
      vuela : true,
      color: Color.verde
  },
  { nombre: 'Spiderman',
      vuela : false,
      color: Color.rojo
  },
  { nombre: 'Venon',
      vuela : false,
      color: Color.negro
  }

]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarboolean(){       
     this.esTexto = !this.esTexto;
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
    
  }

}
