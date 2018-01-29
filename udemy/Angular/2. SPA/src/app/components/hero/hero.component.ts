import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
        // console.log( params['id'] );
        this.hero = this._heroService.getHero(params['id']); // Va al servicio e invoca el metodo que devuelve un solo heroe
        console.log (this.hero.nombre);
      });

  }

  ngOnInit() {
  }

}
