import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones : string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paisesPorRegion : Country [] = [];

  constructor(private paisService : PaisService) { }

  getClassCSS(region:string){
    if(region === this.regionActiva) {
      return ('btn btn-primary');
    }
    return ('btn btn-outline-primary');

  }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    if(region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.paisesPorRegion = [];
    //console.log(this.regionActiva);
    this.paisService.buscarPorRegion(region).subscribe(paises=>this.paisesPorRegion = paises);
    //console.log(this.paisesPorRegion);
  }

}
