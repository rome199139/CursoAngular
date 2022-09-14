import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi:string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set ('fields','name,capital,population,alpha2Code,flags');
  }

  constructor( private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.urlApi}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(tap(console.log));
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.urlApi}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(tap(console.log));
  }

  buscarPorRegion(region:string):Observable<Country[]>{    
    const url = `${this.urlApi}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(tap(console.log));
  }

  getPaisPorCodigo(idpais:string):Observable<Country>{
    const url = `${this.urlApi}/alpha/${idpais}`;
    return this.http.get<Country>(url);
  }


  
}
