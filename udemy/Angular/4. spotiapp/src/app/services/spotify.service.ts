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
    const token = 'BQDFaLQ5g096IaH9JvBCJWnKpHMWoJgFOsM-b2SadKbh4F_yf85oVyaWVKWPanh8-NnbjJlV9FpoIIAOdbo';

    // Para el envio del token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ token }`
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
