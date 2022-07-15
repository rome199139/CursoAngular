import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {
  heroes:string [] = ['Ironman', 'Spiderman', 'Batman', 'Superman', 'Hulk'];
  heroeBorrado:string = '';
  borraritem(){
    console.log('borrando ando');
    this.heroeBorrado = this.heroes.shift() || '';    
  }
  
}
