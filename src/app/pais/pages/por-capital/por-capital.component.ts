import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string ="";
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor( private paisService : PaisService) { }

  buscar(termino:string) {
    this.hayError=false;
    // console.log(this.termino);
    this.termino = termino;
    // console.log(this.termino);

    this.paisService.buscarCapital(termino)
    .subscribe((capitales)=> {
        // console.log(capitales);
        this.capitales = capitales;
      }, (err)=> {
        this.hayError= true;
        this.capitales= [];
      }
      );
    }
   

  ngOnInit(): void {
  }

}
