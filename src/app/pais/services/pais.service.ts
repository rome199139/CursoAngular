import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi:string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.urlApi}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.urlApi}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(idpais:string):Observable<Country>{
    const url = `${this.urlApi}/alpha/${idpais}`;
    return this.http.get<Country>(url);
  }


  
}
