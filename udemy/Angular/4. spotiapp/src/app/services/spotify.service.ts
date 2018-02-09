import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Permite usar las peticiones GET - POST ...
import 'rxjs/add/operator/map'; // Se hace esta importacion para usar el operardor map



@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor( public http: HttpClient) {
    console.log ('Servicio de Spotify');

  }

  getArtistas( termino: String) {
    const url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&limit=20`;

    // Para el envio del token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDJpZKSBFE853QYwnMZkZkpcujbNDe5wufLBxf5Ba2q23i7j_d4haTZHABOe45JLwj_DRzy0V0_t3T4d0M'
    });

    // Retornar la peticion GET con el URL + header
    // Se usa el operardor map para modificar mi observable y transformar la data
    return this.http.get(url, { headers })
            .map( (resp: any) => {
              this.artistas = resp.artists.items;
              return this.artistas;
            });
  }

 }


  // Hacer peticion GET
    // this.http.get(url, { headers }).subscribe(
    //   data => {
    //       console.log( data );
    //   }
    // );
