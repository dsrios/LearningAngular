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
       console.log( params['id'] );

      });

  }

  ngOnInit() {
  }

}
