import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';// Se usa para redireccionar a otra pagina

// Heroe es una interface


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = [];

  constructor(private _serviceHeroes: HeroesService, private router: Router) {
    console.log('Constructor');
   }

  ngOnInit() {
    this.heroes = this._serviceHeroes.getHeroes();
    console.log(this.heroes);
  }

  verHeroes( idx: number ) {// Navegando con un boton hacia otra pagina
    this.router.navigate(['/hero', idx]);
  }

}


// Se crea el servicio y luego de esto se importa el sevicio, y se trae atravez del
// constructor y luego se trae uno de los metodos publicos creados en el servicio.