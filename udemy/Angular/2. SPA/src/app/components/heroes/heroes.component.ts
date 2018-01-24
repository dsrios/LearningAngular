import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
// Heroe es una interface


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = [];

  constructor(private _serviceHeroes: HeroesService) {
    console.log('Constructor');
   }

  ngOnInit() {

    this.heroes = this._serviceHeroes.getHeroes();
    console.log(this.heroes);

  }

}


// Se crea el servicio y luego de esto se importa el sevicio, y se trae atravez del
// constructor y luego se trae uno de los metodos publicos creados en el servicio.