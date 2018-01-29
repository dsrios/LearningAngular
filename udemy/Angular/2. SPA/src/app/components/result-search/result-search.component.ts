import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html'
})
export class ResultSearchComponent implements OnInit {

  heroesResult: Heroe [] = [];

  constructor( private _heroeService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        params => {
         // tslint:disable-next-line:max-line-length
         this.heroesResult = this._heroeService.buscarHeroes(params['term']); // Capturo el parametro y hago la busquedad creadndo un nuevo array y renderizandolo en la vista
        }
    );
  }

  verHeroes( idx: number ) {// Navegando con un boton hacia otra pagina
    this.router.navigate(['/hero', idx]);
  }

}
