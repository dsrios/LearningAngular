import { Component, OnInit } from '@angular/core';
// import {HttpModule} from '@angular/http';  Sirve para prevenir que caundo hagamos enter la pagiba se recargue
// Tambien se resuelve colocando onsubmit="return false" en el form
import { HeroesService, Heroe } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {
  heroesResult: Heroe [] = [];


  constructor( private _heroeService: HeroesService, private router: Router) { }

  ngOnInit() {

  }

  buscarHeroe( termino: string ) {
    // console.log( termino );
    this.heroesResult = this._heroeService.buscarHeroes(termino); // Obtiene el arreglo con la busquedad de herores
    // console.log( this.heroesResult, this.heroesResult.length );

    if ( this.heroesResult.length > 0 ) {
      this.router.navigate(['/resultSearch', termino]); // Navega a la neuva pestala de heroes
    } else {
      alert( 'No se encontraron resultados para ' + termino );
      this.router.navigate(['/heroes']); // Navega a la neuva pestala de heroes
    }
  }



}
