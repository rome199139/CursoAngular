import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html'
})
export class ComunesComponent implements OnInit {

  nombreLower:string = 'luis arturo';
  nombreUpper:string = 'LUIS ARTURO';
  nombreCompleto:string = 'LuIs aRtUrO';
  fecha:Date = new Date();
  

  constructor() { }

  ngOnInit(): void {
  }

}
