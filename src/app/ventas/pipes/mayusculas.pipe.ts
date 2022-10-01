import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    transform(valor:string, esTexto:boolean = true) {
        // if(esTexto===true){
        //     console.log(valor);
        //     return valor.length;
        // } else {
        //     return valor;
        // }
        return (esTexto) ? valor.length : valor;
    } 

}