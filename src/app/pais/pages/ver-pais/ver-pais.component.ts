import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService) { }

  ngOnInit(): void {
    //   this.activatedRoute.params.subscribe(({idpais}) => {console.log(idpais);
    //   this.PaisService.getPaisPorCodigo(idpais).subscribe(pais => {console.log(pais);
    //   });
    // });

    // this.activatedRoute.params.pipe(switchMap(({idpais}) => this.PaisService.getPaisPorCodigo(idpais)))
    //   .subscribe(resp => {console.log(resp)});

    this.activatedRoute.params.pipe(switchMap(({idpais}) => this.PaisService.getPaisPorCodigo(idpais)),
    tap(console.log))
    .subscribe(pais => this.pais = pais);

  }

}
