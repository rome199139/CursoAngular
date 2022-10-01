import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html'
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 456987539.3388;
  porcentaje: number = 0.3388;

  constructor() { }

  ngOnInit(): void {
  }

}
