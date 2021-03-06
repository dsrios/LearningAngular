import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {}; // Objecto vacio
  topSong: any [] = []; // Recibe el objeto del get top tracks

  constructor(private activatedRoute: ActivatedRoute,
              public _spotifyService: SpotifyService,
              private router: Router
              ) {}

  ngOnInit() {
// Capturar el parametro que viene por la url (id)
    this.activatedRoute.params
            .map( params => params['id_cantante']) // Esto obtiene el ID directo no un {} sino un string
            .subscribe( id_cantante => {
             console.log(id_cantante);
                  // Obtener el Artista
                  this._spotifyService.getArtista( id_cantante ).subscribe(
                    artista => {
                      console.log( artista );
                      this.artista = artista;
                    });
                    // Obtener el top del artista
                    this._spotifyService.getTopTracks( id_cantante )
                    .subscribe( result => {
                      this.topSong = result;
                      console.log(this.topSong);
                    });


            });
  }

  // Regresar() {
  //   this.router.navigate(['search']);
  // } Esto se reemplaza con un routerLink

  // Ir() {
  //   console.log(this.artista.href);
  //   window.open(this.artista.external_urls.spotify);
  //  } Esto se reemplaza por una etiqueta a

}

