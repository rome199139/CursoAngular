import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(color:number): string {
    switch(color){
      case 0:
        return 'Su Color es: Rojo'
      case 1:
        return 'Su Color es: Negro'
      case 2:
        return 'Su Color es: Azul'
      case 3:
        return 'Su Color es: Verde'
      default: 'Su Color es: Amarillo'
    }
    return 'Su Color es: sin color'
  }  
}
