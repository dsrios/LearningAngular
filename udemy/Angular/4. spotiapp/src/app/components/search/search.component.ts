import { Component, OnInit } from '@angular/core';

// Services
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino: String = '';


  constructor(public _spotifyService: SpotifyService) { }

   buscarArtista() {
          if ( this.termino.length === 0) {
            return;
          }

          this._spotifyService.getArtistas(this.termino).subscribe( resp => {
              console.log('Informacion lista');
              console.log(resp);
          });
   }

  ngOnInit() {
  }

}
